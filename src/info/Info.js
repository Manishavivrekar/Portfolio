import self from "../img/self.png"
import logo from "../img/logo.png"
import mock4 from "../img/lilly1.png"
import mock2 from "../img/lilly2.png"
import mock3 from "../img/amgenbiosimilarspng.png"
import mock1 from "../img/biosimilars-de.png"
// import mock5 from "../img/olumiant-rheumatoid-arthritis.png"
import mock6 from "../img/parsabiv.png"
import mock7 from "../img/FAXO.png"
import mock8 from "../img/PSTO.png"
import mock9 from "../img/PSTO_flyer_1.jpg"
import mock10 from "../img/PSTO_flyer_2.jpg"
import mock11 from "../img/FAXO_flyer_1.jpg"
import mock12 from "../img/FAXO_flyer_2.jpg"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Manisha",
    lastName: "Vivrekar",
    initials:  logo, // the example uses first and last, but feel free to use three or more if you like.
    position: "UI Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by tea'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "React Front End Developer at Oracle"
        },
        {
            emoji: "📧",
            text: "manishavivrekar@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/Manishavivrekar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/manisha-vivrekar-7050b23a",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Manisha. I am React Front End Developer within Oracle India Pvt. Ltd. I studied information technology at RGPV University, I'm great at reading. And always try to keep my optimistic problem solving skills up to date.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', ],
            exposedTo: ['nodejs', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Listening to music',
            emoji: '🎵'
        },
        {
            label: 'Singing',
            emoji: '🎤'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'Painting',
            emoji: '🎨'
        },
        {
            label: 'Cycling',
            emoji: '🚴‍♀️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Biosimliars",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
        },
        {
            title: "Lilly GE",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Amagen Biosimilars",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Lilly SE",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock4
        },
        // {
        //     title: "FAXO Flyer",
        //     // live: "https://paytonpierce.dev",
        //     // source: "https://github.com/paytonjewell",
        //     image: mock5
        // },
        {
            title: "Parsabiv",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock6
        },
        {
            title: "FAXO",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock7
        },
        {
            title: "PSTO",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock8
        },
        {
            title: "PSTO Flyer",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock9
        },
        {
            title: "PSTO Flyer",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock10
        },
        {
            title: "FAXO Flyer",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock11
        },
        {
            title: "FAXO Flyer",
            // live: "https://paytonpierce.dev",
            // source: "https://github.com/paytonjewell",
            image: mock12
        }

    ]
}