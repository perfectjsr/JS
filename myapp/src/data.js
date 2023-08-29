const data = [
    {
        id : 1,
        title : "Guzaarish",
        desc : "Ethan, a magician rendered paralyzed in an accident, sets off a furor when he makes a petition to the court to end his own life.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMTMzMzIzOTQwOF5BMl5BanBnXkFtZTcwMTI2MTYxNA@@._V1_UY209_CR2,0,140,209_AL_.jpg"
    },
    {
        id : 2,
        title : "The Japanese Wife ",
        desc : "Pen pals decide to get married and carry-on a long-term relationship.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMTA4ODMxNjQ5NzReQTJeQWpwZ15BbWU4MDc4NTQwNjAx._V1_UY209_CR7,0,140,209_AL_.jpg"
    }, 
    {
        id : 3,
        title : "Baghban",
        desc : "An elderly couple wish their children to care for them in their old age. But their children see and treat them as a burden, and they must struggle to regain their worth and dignity to themselves and others.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMjA2NTEyODY4Ml5BMl5BanBnXkFtZTcwOTk2ODgzMQ@@._V1_UY209_CR4,0,140,209_AL_.jpg"
    },  
    {
        id : 4,
        title : "Kabhi Khushi Kabhie Gham",
        desc : "After marrying a poor woman, rich Rahul is disowned by his father and moves to London to build a new life. images later, his now-grown younger brother Rohan embarks on a mission to bring Rahul back home and reunite the family.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR11,0,140,209_AL_.jpg"
    },
    {
        id : 5,
        title : "Drishyam",
        desc : "A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY209_CR9,0,140,209_AL_.jpg"
    }, 
    {
        id : 6,
        title : "Dharm",
        desc : "A very timely piece (don't let the imgurlfool you) about religious differences in India. I dare you not to cry.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BNzU3ODdjMzktYTlkMS00ZTVhLTg2MDItMzhiN2JjZGRmYmMzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjA4NjcxNzI@._V1_UX140_CR0,0,140,209_AL_.jpg"
    }, 
    {
        id : 7,
        title : "Thirst",
        desc : "A poet's angst, not seeking recognition so much as just trying to make a living. Brilliantly presented, don't be afraid of the poetry, it's magical.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYjkzODdhZjUtMjY0YS00ODA3LTkxMDUtM2JlYTQyMWE1NTMzXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_UY209_CR5,0,140,209_AL_.jpg"
    }, 
    {
        id : 8,
        title : "Raincoat",
        desc : "All he wanted was to see her just once. Manu was from a village in the backwoods. Neeru was the girl next door, his lost love.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BOTFmZTFjMmEtYTA5MC00NGY0LTgyZTUtZTM1ZWE2NzM0ZmE2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 9,
        title : "Devdas",
        desc : "After his wealthy family prohibits him from marrying the woman he is in love with, Devdas Mukherjee's life spirals further and further out of control as he takes up alcohol and a life of vice to numb the pain.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BY2QxMGM4Y2QtMGFmMy00ZjZkLWExMWQtNTY1Yjc0MDFjZjY0XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 10,
        title : "Kaksparsh",
        desc : "Uma loses her husband at a very young age and faces many hardships. The only support she gets is from her brother-in-law.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMTRhM2Q2ZWQtMDk5Mi00NjBmLThjMTQtMTM3OTgzYTA4NjlmXkEyXkFqcGdeQXVyNDYxMTMxNzY@._V1_UY209_CR133,0,140,209_AL_.jpg"
    }, 
    {
        id : 11,
        title : "Bahubali: The Beginning",
        desc : "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
    }, 
    {
        id : 12,
        title : "Jodha Akbar",
        desc : "A sixteenth century love story about a marriage of alliance that gave birth to true love between a great Mughal emperor, Akbar, and a Rajput princess, Jodha.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYzFhNjI3YjgtZmNhNC00NzEyLTk2MTctMmNjZDgzYTNjYjViXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 13,
        title : "Mughal-E-Azam",
        desc : "A 16th century prince falls in love with a court dancer and battles with his emperor father.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMmM2YWQ3MzctOTk1NS00NThhLWExY2MtYjQzZGRmZTFiYWY3XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY209_CR6,0,140,209_AL_.jpg"
    }, 
    {
        id : 14,
        title : "OMG",
        desc : "A shopkeeper takes God to court when his shop is destroyed by an earthquake.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BNDk0NDU1NzEwN15BMl5BanBnXkFtZTgwMTgyNTA2NjE@._V1_UY209_CR8,0,140,209_AL_.jpg"
    }, 
    {
        id : 15,
        title : "Mohabbatein",
        desc : "A film about the battle between love and fear, between two stubborn men and their opposing beliefs and the outcome of the love stories of 3 couples.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYzU5ZGJiYzQtYjA2Yi00MmNmLTlmZmYtZTcxZjBhZGM1NDcxXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_UY209_CR8,0,140,209_AL_.jpg"
    }, 
    {
        id : 16,
        title : "Rann",
        desc : "The revered chief of a news agency tries to maintain journalistic integrity as his bureau and a rival agency vie for viewers following a terrorist attack.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYWNkNjY2ZjEtNmZlOS00Njg4LTk2MjQtOWUyZWU1N2VjYmJkXkEyXkFqcGdeQXVyODA4MDA0Mjg@._V1_UX140_CR0,0,140,209_AL_.jpg"
    }, 
    {
        id : 17,
        title : "Dabangg",
        desc : "A corrupt police officer faces challenges from his family, gangsters and politicians.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMTMyOTQ0Mzg2Ml5BMl5BanBnXkFtZTcwMDcyOTM5NA@@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 18,
        title : "3 Idiots",
        desc : "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 19,
        title : "Toilet: Ek Prem Katha",
        desc : "An elderly couple wish their children to care for them in their old age. But their children see and treat them as a burden, and they must struggle to regain their worth and dignity to themselves and others.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BMTAxODQ2NDEwOTZeQTJeQWpwZ15BbWU4MDk5MDM3NjIy._V1_UY209_CR8,0,140,209_AL_.jpg"
    }, 
    {
        id : 20,
        title : "Kesari",
        desc : "Based on an incredible true story of the Battle of Saragarhi in which an army of 21 Sikhs fought against 10,000 Afghans in 1897.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYTRhZWVkNTctMzRmYy00MDk1LWIzNDYtMjA1ZGE5YWJkYjU0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR4,0,140,209_AL_.jpg"
    }, 
    {
        id : 21,
        title : "Padman",
        desc : "Upon realizing the extent to which women are affected by their menses, a man sets out to create a sanitary pad machine and to provide inexpensive sanitary pads to the women of rural India.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BODViYjQ0YTktMTM5NS00YTVkLWE5MmUtNGY1MzUwOGY0OTg2XkEyXkFqcGdeQXVyNjg5NzkxNTU@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }, 
    {
        id : 22,
        title : "Cycle",
        desc : "A post-Independence era story, Cycle is about 'Keshav''s intense love for his cycle which gets stolen by two thieves. Will Keshav ever find his cycle back?",
        imgurl: "https://m.media-amazon.com/images/M/MV5BYzUxNWFkZmUtNmE0Ny00NzYyLWIzNDUtZTk1YzVmZWExY2ZjXkEyXkFqcGdeQXVyNjc5NzI3NzM@._V1_UY209_CR4,0,140,209_AL_.jpg"
    }, 
    {
        id : 23,
        title : "Gulabjamun",
        desc : "Aditya is a young Maharashtrian man from London who comes to Pune to find a someone who would teach him traditional Maharashtrian cooking. His aim is to open a Marathi Gourmet Restaurant in London.",
        imgurl: "https://m.media-amazon.com/images/M/MV5BNmIzMWQxMjctYzJhMS00MGFiLTkwOTctMWRmZWRlNGJkYzg3XkEyXkFqcGdeQXVyNjc0NTgxNzc@._V1_UX140_CR0,0,140,209_AL_.jpg"
    }, 
     
]
for (let i in data){
    console.log(data[i]+"\n");
}


export default data;