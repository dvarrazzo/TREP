#!/usr/bin/env python

# For every letter: write the body into body then for every letter: save the body

alphabet = list(map(chr, range(ord('a'), ord('z')+1))) # Not using import string string.ascii_lowercase as I want to be able to include/exclude letters manually

def main():
        for c in alphabet:
        # Read the template of the page
            template = "/home/h/Documents/trepgit/Template/alphabettemplate.html"
            with open(template) as f:
                alphabettemplate = f.read()
        # Read the body of the page
            body = "/home/h/Documents/trepgit/Bodies/{}-body.html".format(c)
            with open(body) as f:
                body = f.read()
        # Write the complete page
            filename = "/home/h/Documents/trepgit/Generated web pages/{}.html".format(c)
            page = alphabettemplate.format(filename=filename, body=body)
            with open(filename, "w") as f:
                f.write(page)

if __name__ == '__main__':
    main()
