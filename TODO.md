## (Remaining) TODO for Minimal Viable Product

### Back-end

(Any time a new model or association is mentioned, assume it should be seeded 
in a common-sense way)

- `Collections` model needs `hist` attribute with exact same model as the 
`Analyses` one, also `description` and `name` attributes.

- `Analyses` and `Collections` models need to have `ownerId` in them; those 
  should point to `User` model IDs

- Users need to have `Analyses` and `Collections`; they should have `analyses` 
[ ] and `collections` [ ] appended to them. 

- `Profile` model need to have `about`, `name`, `email`, and `background` on 
it. In addition, `forkedFromTimes`, a value that represents the number of times 
others have forked from them, and `forkedTimes`, a value for how often they 
themselves have forked.

- `Categories` model must exist in Mongo; it should be a list of available 
categories of scientific interest (can be seeded as random words), and `Users` 
should have `interests` attribute pointing to between 2 and 5 of those 
categories.

- Each `Analysis` and `Collection` must be associated to between 2 and 5 
`Categories`.

- `included` parameter of `Analysis` model must be changed to `collectionId`

- Jeff's method of using hooks instead of "deep populate" should be employed 
for all models which include others models, on our site; this way back-end 
R(ead) operations will be a lot simpler, going forward (it's a temporary 
solution, and probably would be infeasible at scale, but for our needs it is 
elegant and useful---and not impossible to re-factor later on).

- Back-end routes must exist for performing C and R operations on a specific 
  user's interests (Categories), and on the full set of Categories.

- Back-end routes must exist for creating a new `Profile` and (simultaneously) 
associating it with a `User`.

- Back-end routes must exist for creating and deleting an analysis, as well as 
fetching an analysis, for a specific user.

- `AnalysisLedger` model must exist in Mongo; it is simply a large object with 
  keys and values for each fork of an `Analysis` that happens on the site. The 
key is the user ID and the value is the resource ID that got forked.

- `CollectionsLedger` model uses same format as above.

- Both `CollectionLedger` and `AnalysisLedger` should have hooks on them that 
fire whenever a new "fork" event is created in the model. These hooks simply 
add 1 to `forkedFromTimes` and `forkedTimes` attributes of the user who forked 
and the user who was forked from, respectively.

### Front-end

- Create editable profile page that user is taken to after they register. With 
it, you should be able to make a new description for yourself, enter a name, 
email, and academic/educational background. 

- You should also be able to enter interests that you may have, which will 
match up in the database by each consecutive letter typed, until there are no 
matches, at which point putting in a new interest *creates* a new interest 
(category) in the database. To see a good example of this in action, look at 
the Linkedin "Add a new skill" option.

- Profile page must have public and private version; private version must have 
"Edit" button in top right that redirects to editable profile page built above. 

- Search page needs to work for site pages, users, analyses, and collections; 
that is, each search result must link to the relevant single resource pages.

- "About" Page must be built, which describes project. "How to" page should 
(ideally) be built too, describing how to use the site.

- Current and previous code should be re-factored and displayable to another 
person.

- Modules must be properly connected to Redux

- Module needs generalizable structure, ability to create dynamically from code 
on OpenCPU

- Need several valid modules

- "Create analysis" page must be built and it must look *good*. 

- "Edit analysis" page is just "Create analysis" page again, with different 
route and "Edit" in the title.

- Single-resource analysis page must have "Pull and edit" option on it; 
redirects to "Edit analysis" page above, while creating a new analysis for the 
user who just pulled (this is a copy of the old analysis exactly except for 
adding {id: // new id, date: // time pulled } to the first place in the `hist` 
array of the model, and pushing the old hist object to second place).

- Similar setup for "Edit Collections" page; exactly like "Create collections" 
page, but with different route and no "Use existing collections" option.

- Same "Pull and edit" option should exist for Collections single-resource 
page. This page should just list the studies in the collection, together with 
the collection name and description.

- Statistical properties of `Study` model need to be more carefully thought out 
and re-factored. 

- Public profile page should list the *titles* of a User's analyses and 
collections. It should also list the actual number of analyses, collections, 
and forks from and of the user.


## Message to the team

To the team:

Today, after a little reading on Git, I happened to glance at the commit log 
for our project's master branch, and... to put it lightly... there is no doubt 
that we've invested a *massive* amount of work into OpenMeta. And there's good 
reason to do so: our project is *huge*. For a team of five, we've taken on, for 
the first time (for all of us), the formidable responsibility of building a 
true "social network", while implementing complex, open-ended functionality to 
give that network *value*. We've struggled with things we've taken for granted 
much of our lives, and also gone out and implemented totally new things. This 
has been a wild week.

The time is approaching, however, when all this work is going to *matter*, both 
to us, professionally and personally, as well as to the community it is 
designed to serve. We are breaking new ground; our site has been engineered to 
enable radical transparency and speed in scientific research---but none of it 
will count if we cannot *present* ourselves and our efforts in the correct 
light. This is the week when we make what we've done useful to other human 
beings; our site has to pleasant to use and understandable to non-developers, 
and our codebase must be intelligent, well-engineered, and well-commented, to 
draw contributors.



I am confident that if we are well-organized and use our time efficiently, we 
will be surprised but what we are able to deliver on Friday. Let's get our act 
together, communicate with each other, be proactive about contributing, and 
give it our best shot---this is our last week as Vikings, we are the last 
Vikings, and we are the best of the breed. Let's show them.

  Johann




There are two meanings I have for this: the first is that the site must be 
pleasant to use and understandable to non-developers; it has to draw people in 
and keep them there; and the second is that we must build something that lasts 
for the future. When developers begin to contribute to our project, they should 
encounter an intelligent, well-engineered, and well-commented codebase---it 
should contain code that we are proud of, and would like others to see, not 
code that will have to be re-written. All of us have work to do to meet this 
standard.

From both the standpoint of user experience and developer experience, it isn't 
enough to just have something that works; it must also be *elegant* and 
*beatutiful*, to be noticed. That is why we are going to put a damper on 
expansion and focus on producing something exceptional with what we already 
have, in these last few days. And we already have the groundwork for a pretty 
remarkable project. 
