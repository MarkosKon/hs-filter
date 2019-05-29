---
title: Future Improvements | HSFilter
description: This is a list of things I want to add in the future. If you think of something else you let me know.
---

#Future Improvements

This is a list of things I want to add in the future. You'll have to consider that this app is a side project that I'm not getting paid to make. As a result, I develop it in my free time so many things here may take a long time to become reality.

If you think of something else you [let me know](https://mkdevdiary.netlify.com/contact/).

- Improve the **user experience**. At the moment it's pretty hard to add custom filters in the App if you don't have a programming background. What we can do:
  - Add **display name** for the **filters**. Right now we display only the value. For example, the **Set** filters display a number 0, 1, 2, 3 etc.. This doesn't make much sense.
  - ~~Add **windowing** with [react-window](http://react-window.now.sh) in the **predefined filters/filter groups**. (Done)~~ ~~That way the will be more compact and we can add a ton more filters so users don't have to create them manually.~~
  - Add **drag & drop**. It would be nice to be able to drag and drop the filters wherever you like but it's not a priority. That's because it will bloat even more the filter objects in the global state.
- Test the app. Maybe [react-testing-library](https://github.com/kentcdodds/react-testing-library) will be helpful?
- Make this project open-source on GitHub.
- **Improve help section**. More examples, more resources maybe?
- Make card details modal into **different pages** for better **SEO** and **back button navigation**. We talk about 2000+ new pages. No problem though it's easy with [Gatsby's node API's](https://www.gatsbyjs.org/docs/node-apis/). The drawback is that we end up with an inconsistent design and we'll have to do the same with the rest of the modals/dropdowns.
- **Make all modals, dropdowns and sidebars different pages for back button navigation** (and SEO?). It's kind of hard to do this because we'll have to add a ton of new state (search input - react-window viewing location, UI state) in global state.
- **Sidebar** and **filter dropdown** are not fully accessible.
  - They are not hidden when not in screen.
  - They is no ESC key listener.
  - There rest of the page content is accessible when they are in focus.
  - When they open the focus doesn't jump into the new content.
    Some of that stuff may apply to modals too.
- Add [Disqus](https://disqus.com) comments in this page so people can ask stuff directly.
- Try mdx for better developer experience in help pages. Not sure if this is necessary.

[Back to help section](/help/)
