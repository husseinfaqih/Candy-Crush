import React from "react"

const allCategories = ["Gum" ,"Hard Candy", "Lollipops","Cookies", "Jelly Beans", "Candy Corn"]
const Categories = () => {
   return (
    allCategories.map(c => <button key={c} style={{margin : "5px"}}>{c}</button> )
   )
}

export default Categories
