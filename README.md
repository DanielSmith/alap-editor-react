
<p align="center">
    <img src="https://user-images.githubusercontent.com/167197/162095918-069ca240-82e4-454a-834b-f93f2b8cbe30.png">
</p>

----
# Alap Editor - React Version 1.1

This is a Proof of Concept editor for link items to be used by Alap.  Alap enables attaching menus to anchors or images on a web page.  The idea is to dynamically provide choice as to where a link will go, as opposed to be limited to one target.

The editor is a DEMO for now.  Alap is driven by a configuration object that defines the label, url, and tags for each menu item.

![image](https://user-images.githubusercontent.com/167197/162095442-27548b69-7da2-4402-ae1d-c94977a697a7.png)

## More info:
- [https://editor-react.alap.info/](https://editor-react.alap.info/) - this editor
- [https://editor-vue.alap.info/](https://editor-vue.alap.info/) - the Vue version
- [https://alap.info/](https://alap.info/) - Alap demo
- [https://github.com/DanielSmith/alap](https://github.com/DanielSmith/alap) - Alap repo
- [dev.to Article](https://dev.to/danielsmith/alap-menus-for-links-5e95) - alap - Menus For Links


## Features

- Drag and Drop links in, to extract some site infromation
- Interactively test item IDs and tags on a sample link
- Create items from scratch
- Easy to clone existing items
- Prevent same-name duplicate items
- Search input used to filter item list

## Requirements

My enviroment is using:
* Vite
* React with Zustand and Immer
* Netlify account, with `Netlify-cli` for local development

## Installation 

clone the alap-editor-react repo, and run the commmands

```bash
  cd alap-editor-react
  npm install
  netlify dev

  # or if not using drag and drop links:
  npm run dev
```

## Things to try

* use the search input (upper left) to filter the item list
* clicking on any item will let you edit the label, url, and tags. 
* the red X icon enables deleting an item (for the demo it is for the session only)
* the copy icon enables cloning an item. (persists for demo session only)
* you can drag in links from other browsers to make a new item.  The editor will make an attempt to find data from the site you dragged in.  You can drag in multiple lines of links, and the editor will create a new item for each link.
* you can change the name for any new item. Once a name has been set, it is made read-only (the idea being: once a real implementation is saved to a DB, you dont want to change an ID that web sites might be depending on)
* the link input at the top lets you test combinations of tags and item names, and this can be tested immediately with the sample link

## Tech Stack and some comments....

**Client:** Vite, React 17.0.0, Zustand 3.7.1, Immer 9.0.12, TailwindCSS 3.0.23

**Server:** Netlify functions (Node Lambda)

This is an exploratory demo that is not meant to save edits from session to session.

This started out as a port of my Vue client.  Now it is time to circle back and improve that side.  It is also time to go to the core alap package, and make that better suited for 2 possible targets: the internal vanilla js/css, and data-only (for handing off data to React or Vue).

## Acknowledgements

 - [Ania Kubów, Youtube](https://www.youtube.com/watch?v=n_KASTN0gUE) - Got me going on Netlify Serverless

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
