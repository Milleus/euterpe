# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class LinkcheckerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    page_url = scrapy.Field()
    link_text = scrapy.Field()
    attr_href = scrapy.Field()
    attr_id = scrapy.Field()
    attr_class = scrapy.Field()
    attr_target = scrapy.Field()
    status = scrapy.Field()
    resolved_url = scrapy.Field()
    is_internal = scrapy.Field()
    pass
