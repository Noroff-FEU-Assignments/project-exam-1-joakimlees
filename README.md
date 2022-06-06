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

## Final reflection

Looking back at the project, I didn't really start off by giving any thought into naming my css classes. Something i realized at the end was a huge mistake. As it became very difficult to have get a DRY written CSS. So for my future projects, I will have to plan better ahead on how I want to organize and write my css styles.

I look at this project, as I do with all my projects. As a stepping stone for me to become a "kick-ass" developer. This projects have generally made me a better developer, and it has improved my skills in especially javascript. My javascript is not perfect by far, but my knowledge and skills are better then before the project.
This was the first time I made for example a "carousel" and a "pop-up image". I chose to make a carousel with a "pagination" technique, so next time I have a similar task, I'm thinking I'll try making it as a horizontal scroll.

Besides making improvements on my knowledge and skills on html, css, javascript, design etc. Doing bigger projects like this one gives me more experience with working on projects. In terms of planning, time management and so on.

## Contributing

For any contributions, make sure to open a pull request so that code can be reviewed.

## Contact

[My portfolio Website](https://stellar-platypus-59ad66.netlify.app)

[My LinkedIn page](https://www.linkedin.com/in/joakim-lee-sletten-14381621a/)
