# clickable-anchors-plugin

The plugin provides for clickable headings and anchors that have been placed by the Anchor Macro.
The plugin is meant for use with Atlassian Confluence.

## Motivation

Coming over from Trac, I was accustomed to clickable headings, so I can just click and copy the link.
And while Trac, at least on the desktop, will only display the link on mouse over, I needed something that can be
navigated at all times, especially when using mobile devices.

## How Does it Work?

The plugin will run a JQuery script that augments all content level headings into links. The same goes for anchors
that have been placed using the Anchor macro.

For the latter, a "#" link will be rendered in place of the anchor, so extra care must be taken on where you place your
Anchor macros.

The so augmented headings and anchors are also available in the page preview.  

## Usage

Install and enjoy.

## How to Build

You can build this yourself, but first you have to install the Atlassian SDK.
Using ``atlas-run`` allows you to try out the plugin locally.

## Additional License Information

Part of the logo (the hand icon) was adapted from the free Font Awesome icon library and is licensed 
under [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/legalcode).
