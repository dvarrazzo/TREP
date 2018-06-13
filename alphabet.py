#!/usr/bin/env python

import os

def main():
        # Read the template of the page
        template = "/home/h/Documents/trepgit/Template/alphabettemplate.html"
        with open(template) as f:
            alphabettemplate = f.read()

        # Read the body of the page
        filename = "/home/h/Documents/trepgit/Bodies/abody.html"
        with open(filename) as f:
            body = f.read()

        # Write the complete page
        filename = "/home/h/Documents/trepgit/a.html".format()
        page = alphabettemplate.format(filename=filename, body=body)
        with open(filename, "w") as f:
            f.write(page)

if __name__ == '__main__':
    main()
