import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ height: '176px', background: 'url(https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg?width=700&crop=2:1) center / cover' }}>
                        Google Books Search
                </CardTitle>
                    <CardText style={{ color: '#000000' }}> This MERN application uses the google books api to help users find books and save them to their library. Search for book, hit the save button and you will find them on the saved page.
                </CardText>
                    <CardActions border>
                        <Button> <a href="https://github.com/talmageluke/Google-Books" rel="noreferrer" target="_blank">Github</a></Button>
                        <Button><a href="https://fierce-basin-20120.herokuapp.com/" rel="noreferrer" target="_blank">Heroku Link</a></Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                </Card>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ height: '176px', background: 'url(http://www.graygeargraphics.com/wp-content/uploads/2017/06/burger-express-logo.jpg) center / cover' }}>
                        Burger logger
                        </CardTitle>
                    <CardText> This is a simple express application a MySQL database. Nothing too impressive here, just showing my knowledge of express and routing.
                </CardText>
                    <CardActions border>
                        <Button> <a href="https://github.com/talmageluke/13-homework" rel="noreferrer" target="_blank">Github</a></Button>
                        <Button><a href="https://whispering-mesa-18548.herokuapp.com/" rel="noreferrer" target="_blank">Heroku Link</a></Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                </Card>

            )

        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.online-tech-tips.com/wp-content/uploads/2019/10/discord.jpg.webp) center / cover' }}>
                        ELO Bot
                    </CardTitle>
                    <CardText>This is a Discord bot I developed in Node.js using the <a href="https://discord.js.org/">Discordjs</a> library and a lot of MySQL. This bot helps friends keep track of their head to head matches for any game
                    with separate leaderboards for each game and server!
                    </CardText>
                    <CardActions border>
                        <Button> <a href="https://github.com/talmageluke/elo_bot2" rel="noreferrer" target="_blank">Github</a></Button>
                        <Button><a href="https://discord.gg/8tEvFZFb" rel="noreferrer" target="_blank">Example Server</a></Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                </Card>

            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://dylandewey.github.io/Papyromancy/images/logo.PNG) center / cover' }}>
                        Papyromancy
                    </CardTitle>
                    <CardText>Papyromancy was my first project where I put together everything I knew. Working in a small group.
                    This simple application uses free APIs to calculate exchange rates and also displays the purchasing power parity between the US and the selected country.
                    </CardText>
                    <CardActions border>
                        <Button> <a href="https://github.com/dylandewey/Papyromancy" rel="noreferrer" target="_blank">Github</a></Button>
                        <Button><a href="https://dylandewey.github.io/Papyromancy/" rel="noreferrer" target="_blank">Papyromancy</a></Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                </Card>

            )
        }

        else if (this.state.activeTab === 4) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.gyazo.com/f78883c2c0a0127b311d10602421edc1.png) center / cover' }}>
                        Budget Tracker
                    </CardTitle>
                    <CardText>While I did not develop the app itself, I was able to put in a service worker and turn it into a PWA. When you enter offline mode you can continue to enter transactions. When your browser comes back online
                    it will push all transactions into the database. </CardText>
                    <CardActions border>
                        <Button> <a href="https://github.com/talmageluke/18-homework" rel="noreferrer" target="_blank">Github</a></Button>
                        <Button><a href="https://aqueous-cliffs-73000.herokuapp.com/" rel="noreferrer" target="_blank">Heroku</a></Button>

                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                </Card>

            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>MySQL/Discordjs</Tab>
                    <Tab>Jquery/HTML/CSS</Tab>
                    <Tab>PWA/Service Workers</Tab>



                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}
