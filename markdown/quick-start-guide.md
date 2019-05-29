---
title: Quick-start guide | HSFilter
description: A quick guide that explains how the app works that'll help you start using it.
---

# Quick-start guide

## What you can do

- You can **add filters** or **filter groups** to limit the card pool. You can **save** those filters and load them later. I call the live collection of filters a preset. You can also **load predefined presets** I've already made (naming things is hard).
- When you type on search you can **search** for card **name**, **text** or **race** (case insensitive).
- You can **search with codes** for **cost**, **class**, **set** or **type**. These are the **autocomplete** suggestions you see when you type in the search box. You can select one from the dropdown, for example:

  - `cost is 1`
  - `cost is 6`
  - `class is NEUTRAL`
  - `class is PALADIN`
  - `set is 15` (Rise of Shadows)
  - `set is 98` (Classic)
  - `set is 99` (Basic)
  - `type is SPELL`
  - `type is WEAPON`

  You can write your own, you don't have to select a suggestion, for example:

  - `cost is 25`
  - `set is 1` (Curse Of Naxxramas)
  - `set is 7` (One Night In Karazhan)

  [(set numbers to expansion names table)](/set-numbers-table/)

  But you can also combine the **class** and **type** if you separate them with a _comma_ (be careful we want caps and no spaces between):

  - `class is PALADIN,NEUTRAL`
  - `type is HERO,WEAPON`

  Basically, the search is for something **quick** but the filters are more **powerful**.

- You can **import** decks from the game or anywhere (almost).
- You can **create** and **save** decks. And yes, you can save more than 18 decks. I'm talking to you Blizzard.
- You can **create decks with more than 30 cards**. This is something I wish Blizzard allowed. Basically, you browse the collection, you add whatever card you think fits your idea and finally you start removing cards until you have a 30 card deck.
- You can add **completely custom filters**. For example (bad example), you may want the cards that their flavor text ends with `!!!`. You create a filter that says:

  `flavor match !!!$`

  You obviously need some experience with regular expressions for the "match" operation. You can see the actual fields of a card if you open the details modal (the button with the magnifier). This a [nice tool to experiment with regular expressions](https://regex101.com/).

## How to use (an example)

Say you come up with an idea for a deck. You want to create an **Elemental Druid** for the **Standard** format. Ok, that's a bad idea, I know. I'm just trying to give you an example. I will now explain what I would do to implement this idea using the app:

- You load the filters for Druid (open filters dropdown - 3 dots icon - Druid standard ) so you have:

`(class equals DRUID or class equals NEUTRAL) AND set greater than 11.`

The parenthesis in the previous sentence represents a filter group (black box).

- Then you want to add the elementals so you select the filter ELEMENTAL from the races collection (filters dropdown - plus icon - ELEMENTAL). That filter when you add it says:

`race equals ELEMENTAL`

and you add it in the last empty filter group.

- Then you create a **DIY** filter (filters dropdown - plus icon - 2) DIY Filter) that says:

`type not equals MINION`

and you add it into the same filter group.

- You change the operation of the last group (black box) to OR because the default is AND.
- You save that filter group for later after you give it a name.
- You browse the cards or search quickly for something and then you add them to your deck.

Now you have standard cards for DRUID or NEUTRAL, that are either ELEMENTAL minions or any weapon/spell/hero card.

[Back to help section](/help/)
