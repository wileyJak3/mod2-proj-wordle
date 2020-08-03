# Mod 2 project-proposal

 ### All In One Dictionary
Problem: currently you have to search urban dictionary and another dictionary seprately to find out if the word you are looking up is slang, an actual word, or not a word at all. Even frequently used online acronyms must be search seprately such as GG, or FTW. This app intends to off one location to find out all the available information about a word in one search.

Targeted End User: Everyone who ever has wanted to find out information about a word without having to go to more than 1 place.


How it works: Currently not much functionality but at least there is a relatively solid foundation to build on. You can enter a word and receive some of the definitions from urban dictionary and google dictionary for the same word. After you enter a word you will need to select what kind of defination you want on the top nav, urban or dictionary. Can switch between the two immediately so it's not a situation where you have to reinter your information in the search bar to see it in a different format. Lastly your last search will display on the page with a random quote.



### Technical Problem Solution
The application will make use of the urban dictionary api and other free dictionary api to get the get the definitions of the words. The user will input a word/string that will be search in the databases of all the dictionary applications. The data will either be stored inside an object before display using map or directly called and  displayed on the screen as a component for each dictionary.

####Update: Due to time constraints the word of the day had to be scrapped,the full definition list, and the side by side definition list all had to be scrapped due to complications is just getting the application se up. Also the hashtag api doesn't work  so thats one dictionary thats unavailable and the acronym api only returns info in xml so will need to figure out an xml to jason converter

Urban Dictionary:
API 1: https://rapidapi.com/community/api/urban-dictionary
API 2: https://www.programmableweb.com/api/urbanscraper

Tag Dictionary:
https://rapidapi.com/snokleby/api/tagdef/pricing

Oxford Dictionary:
https://rapidapi.com/Oxford_Dictionaries/api/oxford-dictionaries/details
https://rapidapi.com/Oxford_Dictionaries/api/oxford-english-dictionary

Spell Check:
https://rapidapi.com/montanaflynn/api/spellcheck

Google Dictionary Api:
https://dictionaryapi.dev/


###Software Used:

React Hooks, react-bootstrap, react router, and react context. axios was also used to make the api calls




### Technical Challenges 
- API (insuring no bugs and everything runs)
- Searching the databses in a timely and efficient manner and printing the information to the screen dynamically.


The search bar, constantly refreshing so that you did not have to reload the page to use the search bar again or press a button was a huger issue that too me nearly two days to solve (somewhat). Then the sharing of the api values required nearly a day with me having to experiment multiple times until I got context to finally work and store the values.

### Wireframe
Homepage Wireframe:
![Test Image 1](wireframe1.png)

Definition Page Wireframe:
![Test Image 1](wireframe2.png)




### Timeline

- Tuesday

  - Weather Project/Wine

 - Wednesday 
    - Start trying to connect to all api's that will be used in project
    
- Thursday:
   - Use api within site/build components

Friday:
- Style components

Saturday:
- Set up router

Sunday:
- clean up

