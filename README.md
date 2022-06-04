# Noroff - Project Exam 1

## Introduction

This repository is to my Exam Project, for my first year at Noroff - School of Technology and Digital Media.

My first year at Noroff covered among other things:

- Design
- Interaction Design
- HTML and CSS
- Javascript (vanilla)
- Content Management Systems (CMS)

## Description

For this project, I was tasked to create a blog site. I could choose the design and topics covered on the blog, but it should have at least the following pages:

- Home page
- About page
- List of blog posts
- Blog post specific pages
- Contact page.

The project has two aspects:

- API from a WordPress installation
- My website built with HTML, CSS and JavaScript

I would need to add at least 12 blogs for the website. I could use lorem ipsum for paragraphs if needed, but headings, images etc. should all make sense.

### Home Page

The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

There should be 4 textboxes on this page.

- Name (Should be more than 5 characters long)
- Email address (Must be a valid email address)
- Subject (Should be more than 15 characters long)
- Message content (Should be more than 25 characters long)

Use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. Making a call to the WordPress REST API to fetch the data.

### Improvements

Here I provide a list of some improve one could add to the project:

- Using a naming convention for HTML classes/CSS
- Adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for.
- Post the data from the contact form to WordPress to have the details saved.
- Allow users to submit comments on a blog post, and post this data to WordPress.

## Built with

- HTML
- CSS
- Vanilla javascript
- Wordpress REST API

## Getting started

Clone this repository by pasting this code in your terminal:

```
git clone https://github.com/Noroff-FEU-Assignments/project-exam-1-joakimlees.git
```

Or download and open it with [Github Desktop(download for windows)](https://central.github.com/deployments/desktop/desktop/latest/win32)

## Contributing

For any contributions, make sure to open a pull request so that code can be reviewed.

## Contact

[My portfolio Website]()

[My LinkedIn page](https://www.linkedin.com/in/joakim-lee-sletten-14381621a/)
