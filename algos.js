
const alphOrder = (char) => {
  return char.charCodeAt(0)-96;
}

const toIntFromString26 = (string) => {
  let outputNum = 0;
  for (var i = string.length; i > 0; i--) {
    outputNum += Math.pow(26,i-string.length-1)
  }
}


const toIntFromString26 = (string, digitPlace) => {
  
}
  

# Routing structure for MVP 
#
# There are three main CRUD pages involved in all the flows below:
#
# * /myanlayses (primary display page)
# * /analysis/:id/edit
# * /collections/:id/edit
# 
# There are also single resource display pages and Steven's redirect page:
# 
# * /analysis/:id
# * /collections/:id
# * /selectCollection (Steven's redirect page)
#
# The primary user flows:
# 
# (1) Creating an analysis from the primary display page
# (2) Creating a collection from the primary display page
# (3) Editing an analysis from the analysis single resource page
# (4) Editing a collection from the collection single resource page
#
# Every user flow is spelled out below; each line is a URI that the 
# user visits.
#
# ----------------------------------------------------------------
#
# (1) Creating an analysis from the primary display page
#
# /myanalyses "create analysis" (creates analysis, saves to db)
# 
# then EITHER flow (A) or flow (B)
# 
# (A) 
# * /selectCollection?analysis=324jkjkdf23sa "use existing collection" (loads analysis with query param, puts collection ID in analysis, saves anlaysis to db)
# * /analysis/:id/edit (loads analysis using :id, saves to db)
# * /analysis/:id 
#
# (B)
# * /selectCollection?analysis=324jkjkdf23sa "create collection" (creates collection, saves to db)
# * /collections/:id/edit?analysis=324jkjkdf23sa (loads collection using :id and analysis with query param, saves collection and analysis to db) 
# * /analysis/:id/edit (loads analysis using :id, saves to db)
# * /analysis/:id
#
# ----------------------------------------------------------------
# 
# (2) Creating a collection from the primary display page
#
# * /myanalyses "create collection" (creates collection, saves to db)
# * /collections/:id/edit (loads collection using :id, saves to db)
# * /collection/:id
#
# ----------------------------------------------------------------
#
# (3) Editing an analysis from the analysis single resource page
#
# * /analysis/:id "edit"
# * /analysis/:id/edit (loads analysis using :id, saves to db)
# * /analysis/:id
#
# ----------------------------------------------------------------
# 
# (4) Editing a collection from the collection single resource page
#
# * /collections/:id "edit"
# * /collections/:id/edit (loads collection using :id, saves to db)
# * /collections/:id
#


