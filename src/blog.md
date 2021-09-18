---
title: "Khoa's Blog"
layout: "post.njk"
---

{% if not collections.posts or collections.posts.length === 0 %}
comming soon
{% else %}

## Blog posts

<ul>
{%- for post in collections.posts -%}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
{%- endfor -%}
</ul>

{% endif %}
        