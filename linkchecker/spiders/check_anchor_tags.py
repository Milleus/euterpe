import scrapy
from scrapy.linkextractors import LinkExtractor
from linkchecker.items import LinkcheckerItem
from scrapy.spidermiddlewares.httperror import HttpError
from twisted.internet.error import DNSLookupError
from twisted.internet.error import NoRouteError
from twisted.internet.error import TimeoutError

class CheckAnchorTagsSpider(scrapy.Spider):
    name = 'check_anchor_tags'
    domain = 'sportsingapore.gov.sg'
    start_urls = ['https://www.sportsingapore.gov.sg/']
    handle_httpstatus_list = [301,302,308,400,403,404,410,500,502]

    def parse(self, response):
      if response.status in self.handle_httpstatus_list:
        item = LinkcheckerItem()

        meta = response.meta
        item['page_url'] = meta['page_url']
        item['link_text'] = meta['link_text']
        item['attr_href'] = meta['attr_href']
        item['attr_id'] = meta['attr_id']
        item['attr_class'] = meta['attr_class']
        item['attr_target'] = meta['attr_target']
        item['status'] = response.status
        item['resolved_url'] = response.url
        item['is_internal'] = True if self.domain in response.url else False
        yield item

      if self.domain in response.url:
        # get links and follow
        anchor_tags = response.css('a')
        # anchor_tags = LinkExtractor(allow=(),tags=('a'),unique=('Yes')).extract_links(response)

        for link in anchor_tags:
          link_text = link.xpath('text()').get()
          attr_href = link.xpath('@href').get()
          attr_id = link.xpath('@id').get()
          attr_class = link.xpath('@class').get()
          attr_target = link.xpath('@target').get()

          if attr_href and attr_href != '#':
            yield response.follow(attr_href, self.parse, meta={
              'page_url': response.url,
              'link_text': link_text,
              'attr_href': attr_href,
              'attr_id': attr_id,
              'attr_class': attr_class,
              'attr_target': attr_target,
            }, errback=self.errback_httpbin)


    def errback_httpbin(self, failure):
        # log all errback failures,
        # in case you want to do something special for some errors,
        # you may need the failure's type
        # self.logger.error(repr(failure))

        if failure.check(NoRouteError):
            # no response, check request
            item = LinkcheckerItem()

            meta = failure.request.meta
            item['page_url'] = meta['page_url']
            item['link_text'] = meta['link_text']
            item['attr_href'] = meta['attr_href']
            item['attr_id'] = meta['attr_id']
            item['attr_class'] = meta['attr_class']
            item['attr_target'] = meta['attr_target']
            item['status'] = 'NoRouteError'
            yield item

        if failure.check(DNSLookupError):
            # no response, check request
            item = LinkcheckerItem()

            meta = failure.request.meta
            item['page_url'] = meta['page_url']
            item['link_text'] = meta['link_text']
            item['attr_href'] = meta['attr_href']
            item['attr_id'] = meta['attr_id']
            item['attr_class'] = meta['attr_class']
            item['attr_target'] = meta['attr_target']
            item['status'] = 'DNSLookupError'
            yield item

        elif failure.check(TimeoutError):
            # no response, check request
            item = LinkcheckerItem()

            meta = failure.request.meta
            item['page_url'] = meta['page_url']
            item['link_text'] = meta['link_text']
            item['attr_href'] = meta['attr_href']
            item['attr_id'] = meta['attr_id']
            item['attr_class'] = meta['attr_class']
            item['attr_target'] = meta['attr_target']
            item['status'] = 'TimeoutError'
            yield item
