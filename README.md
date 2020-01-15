# Euterpe

Euterpe is a web crawler that searches a website for internal and external broken links. Quick prototype written in Python.

**NOTE: Currently only checks anchor tags**

## Installation Steps

1. Install python and pip.
2. Install scrapy with `pip install scrapy`.

## Commands

- `scrapy crawl check_anchor_tags`

  Runs crawler and logs output in terminal.

- `scrapy crawl check_anchor_tags -t <type> -o <filename>`

  Runs crawler and logs output into a file.

  - E.g. `scrapy crawl check_anchor_tags -t json -o file.json` will log output into file.json.
  - E.g. `scrapy crawl check_anchor_tags -t csv -o file.csv` will log output into file.csv.

## To do

1. Allow input of website URL (currently hardcoded).
2. Allow checking of img src links.
3. Allow checking of script source links, css stylesheet links, favicon, etc?
4. Allow customisable settings for download timeout, DNS timeout, number of retries, etc.
5. Improve error handling.
6. Extract crawler statistics data (already exists but only in console).
