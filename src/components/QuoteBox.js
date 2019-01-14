import React, { Component } from 'react';

import Quote from './Quote'
import GenerateButton from './GenerateButton'
import TwitterButton from './TwitterButton'
import './QuoteBox.css'

class QuoteBox extends Component {
    state = {
        quotes: [
            { 
                author: 'Rikako Oryo', 
                quote: 'This epidemic leads innocent people to their deaths, and yet it\'s pathogen will never be eradicated. This is a disease called serenity, a form of death that people have wished for',
                show: 'Psycho-Pass',
                show_url: 'https://myanimelist.net/anime/13601/Psycho-Pass'
            },
            { 
                author: 'Eren Kruger', 
                quote: 'There is no such thing as truth in this world. That is our reality. Anyone can become a God or a Devil. All it takes is for someone to claim that to be the truth.',
                show: 'Attack on Titan',
                show_url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin'
            },
            { 
                author: 'Hachiman Hikigaya', 
                quote: 'Well it\'s not like the world is full of sunshine and daisies. If society was only shaped by the view that one must be happy-go-lucky all the time, Hollywood wouldn\'t make tear-jerking movies, would they?',
                show: 'My Teen Romantic Comedy SNAFU',
                show_url: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru'
            },
            { 
                author: 'Rouka Numachi', 
                quote: 'There isn\'t anything that\'s evil to everyone. Even the worst evil saves something. On the other hand, even the greatest good hurts someone. The phrase "There are no absolutes in this world" means there isn\'t any absolute good or absolute evil.',
                show: 'Hanamonogatari',
                show_url: 'https://myanimelist.net/anime/21855/Hanamonogatari'
            },
            { 
                author: 'Gintoki Sakata', 
                quote: 'For a pregnant woman to give birth, she\'s gotta feel the pain of pulling a watermelon out of her nostril. For an Artist to create a masterpiece, he\'s gotta feel the pain of pulling entire galaxies out of his ass.',
                show: 'Gintama',
                show_url: 'https://myanimelist.net/anime/918/Gintama' 
            },
            { 
                author: 'Osamu Dazai', 
                quote: 'Anything I would never want to lose is always lost. It is a given that everything that is worth wanting will be lost the moment I obtain it. There\'s nothing worth pursuing at the cost of prolonging a life of suffering.',
                show: 'Bungou Stray Dogs',
                show_url: 'https://myanimelist.net/anime/31478/Bungou_Stray_Dogs' 
            },
            { 
                author: 'Satsuki Kiryuuin', 
                quote: 'A castle that vanishes at the first gust of wind is worthless. A skyscraper within your mind will never fall down.', 
                show: 'KILL la KILL', 
                show_url: 'https://myanimelist.net/anime/18679/Kill_la_Kill'
            },
            { 
                author: 'Aizen Sousuke', 
                quote: 'You are fighting out of obligation, not out of hatred. You will never reach me like that. Battle without hatred is like a bird without wings. You’ll never defeat anyone like that. You powerless friends are just weights that will break your legs.',
                show: 'Bleach',
                show_url: 'https://myanimelist.net/anime/269/Bleach'
            },
            { 
                author: 'Yato', 
                quote: 'Life and death are like light and shadow. They\'re both always there.But people don\'t like thinking about death, so subconsciously, they always look away from it.',
                show: 'Noragami',
                show_url: 'https://myanimelist.net/anime/20507/Noragami'
            },
            { 
                author: 'Kikyo', 
                quote: 'Once the thread of fate is tangled, it cannot be undone.',
                show: 'InuYasha',
                show_url: 'https://myanimelist.net/anime/249/InuYasha'
            },
            { 
                author: 'Kenshiro', 
                quote: 'The pain on these wounds will last only a second. The pain of your death would last a lifetime.',
                show: 'Fist of the North Star',
                show_url: 'https://myanimelist.net/anime/967/Hokuto_no_Ken'
            },
            { 
                author: 'Sweet Mask', 
                quote: 'A hero must be tough, strong and beautiful... As well as able to promptly and splendidly eradicate evil.',
                show: 'One Punch Man',
                show_url: 'https://myanimelist.net/anime/30276/One_Punch_Man'
            },
            { 
                author: 'Kyoko Mogami', 
                quote: 'No matter the reason, I don\'t think anyone who loses consciousness in the battlefield has any right to survive!',
                show: 'Skip Beat!',
                show_url: 'https://myanimelist.net/anime/4722/Skip_Beat'
            },
            { 
                author: 'Koyomi Araragi', 
                quote: 'The impostor is an impostor because it can\'t be distinguished from the real thing.The proof of its falsity is in its resemblance to the real thing.',
                show: 'Nisemonogatari',
                show_url: 'https://myanimelist.net/anime/11597/Nisemonogatari'
            },
            { 
                author: 'Millions Knives', 
                quote: 'If you keep saving butterflies, spiders will starve to death! But wanting to save them both is a contradiction. What would you rather do? Keep deliberating? The butterfly will be eaten in the meantime.',
                show: 'Trigun',
                show_url: 'https://myanimelist.net/anime/6/Trigun'
            },
            { 
                author: 'Licht Jekylland Todoroki', 
                quote: 'It\'s not about wanting to do something that you can do, it\'s about what you do. It\'s not about wanting to become someone, it\'s about who you want to become.',
                show: 'SERVAMP',
                show_url: 'https://myanimelist.net/anime/31229/Servamp'
            },
            { 
                author: 'Kurosu Etsurou', 
                quote: 'There would be no happier death than being killed by the woman I love.',
                show: 'Ana Satsujin',
                show_url: 'https://myanimelist.net/manga/63849/Ana_Satsujin'
            },
            { 
                author: 'Alois Trancy', 
                quote: 'I have a dream at last. The butterfly trapped in spiderweb has no wings. That butterfly is... me.',
                show: 'Kuroshitsuji',
                show_url: 'https://myanimelist.net/anime/4898/Kuroshitsuji'
            },
            { 
                author: 'Gilgamesh', 
                quote: 'There are two kinds of arrogance. One where you are unequal to the task and one where your dreams are too big. The former is commonplace stupidity... but the latter is a rare species that is difficult to find.',
                show: 'Fate/Zero',
                show_url: 'https://myanimelist.net/anime/10087/Fate_Zero'
            },
            {
                author: 'Kazkis Hauer', 
                quote: 'All those who wander in the darkness seek the light, but when they reach the light, they turn away their eyes from the blinding glare.',
                show: 'Ergo Proxy',
                show_url: 'https://myanimelist.net/anime/790/Ergo_Proxy'
            }
        ],
        currQuote: '',
        currAuthor: '',
        currShow: '',
        currShowUrl: ''
    }

    generateNewQuote = () => {
        let num = Math.floor(Math.random() * 20)
        this.setState({
            currAuthor: this.state.quotes[num].author,
            currQuote: this.state.quotes[num].quote,
            currShow: this.state.quotes[num].show,
            currShowUrl: this.state.quotes[num].show_url
        })
    }

    render() {
        // Generate a random quote on page load
        if (this.state.currQuote === '') {
            this.generateNewQuote()
        }

        return (
            <div>
                <h4 className="title">anime nonsense quote generator</h4>
                <div id="quote-box" className="quote-box">
                    <Quote quote={this.state.currQuote} author={this.state.currAuthor} show={this.state.currShow} show_url={this.state.currShowUrl}/>
                    <div className="row btn-container">
                        <TwitterButton quote={this.state.currQuote} author={this.state.currAuthor} />
                        <GenerateButton click={this.generateNewQuote} />
                    </div>
                </div>
                <footer>
                    created by <a href="https://github.com/mikmaj" target="_blank" rel="noopener noreferrer"> mikmaj </a>
                </footer>
            </div>
        );
    }
}

export default QuoteBox;