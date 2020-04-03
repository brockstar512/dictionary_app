# Project Overview

## Project Links

- [add your github repo link](https://github.com/brockstar512/dictionary_app)
- [add your deployment link](https://dictionaryapp.netlify.com/?_ga=2.44796579.666912393.1585764586-426117086.1585326652)

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I will be making a dictionary app. It will give the user a library of words and if you click on the words it will give the user a definition on a new component page.



dictionary https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=your-api-key
Key (Dictionary):

023e133d-53db-4dad-94d5-5139255f9b6e

Key (Thesaurus):

af41af7a-ec0b-480f-a95c-bd85f44cf8b2





## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

```
{data: {meta:{  
    id:"baseball",
    uuid:"5baf923f-d3d2-4f89-b222-379abca062ea",
    update:"original",
    src:"sch_dict",
    section:"alpha",
    stems:[  
        "baseball",
        "baseballs"
    ],
    offensive:false
},
hwi:{  
    hw:"base*ball",
    prs:[  
        {  
            mw:"ˈbās-ˌbȯl",
            sound:{  
                audio:"baseba01"
            }
        }
    ]
},
fl:"noun",
def:[  
    {  
        sseq:[  
            [  
                [  
                    "sense",
                    {  
                        dt:[  
                            [  
                                "text",
                                "{bc}a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score"
                            ]
                        ],
                        sdsense:{  
                            sd:"also",
                            dt:[  
                                [  
                                    "text",
                                    "{bc}the ball used in this game"
                                ]
                            ]
                        }
                    }
                ]
            ]
        ]
    }
],
shortdef:[  
    "a game played with a bat and ball between two teams of nine players each on a field with four bases that mark the course a runner must take to score; also : the ball used in this game"
]} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [component map](https://res.cloudinary.com/dq6nhmmpi/image/upload/v1585326425/project_2_qjb2wi.jpg)
- [wireFrameDesktopandTablet] (https://res.cloudinary.com/dq6nhmmpi/image/upload/v1585327502/3c9694d3e1dd4f59892f7219b4010391_q28gkw.png)
- [wireFramemobile] (https://res.cloudinary.com/dq6nhmmpi/image/upload/v1585327852/2334234_xxwfbq.png)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- have a page of a list of words. - no. search function replaced this
- have a definition page

#### PostMVP EXAMPLE

- Add cool styling - yes
- add a list of collected words and their definition - no
- add a word of the day - no
- add a search function -yes
- add a thesarus -no
<!-- - add a search for a thesarus -->

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Main | This will render the main and will be parent to other components| 
| search form | This search the dictionary for a specific word| 
| definition | This will render the defintion of the word you have clicked| 




Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3hrs | 6hrs |
| Working with API | H | 3hrs| 3hrs| 5hrs |
| gettin pages to render | H | 3hrs| 2hrs| 2hrs |
| adding styling| H | 3hrs| 2hrs | 2hrs |
|adding search component | H | 3hrs| 3hrs | 5 hrs |
| Total | H | 15hrs| 13 hrs | 20hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
 https://codepen.io/brockstar512/pen/yLNwPNp
button created by Jove Angelevski

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 



```
const wordInfo = props.wordData.map( (word, index) => {
        if(word.shortdef===undefined){
            notHere =true
        }
        else if(index<=3){
            const defArray = word.shortdef.map((def,i) =>{
                return <ul key={i}>
                    <li>{`Definition ${i+1}: ${def}`}</li>
                </ul>
            })
            
        return <div key ={index} className ="speech">
            <div className ="innerWrapper">
            <p>{`Part of Speech: ${word.fl}`}</p>
                {defArray}
                </div>
                </div>
        }
        else{
            return <></>
        }
    })
```
