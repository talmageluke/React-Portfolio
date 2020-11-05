import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
export default class HomePage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src='https://i.gyazo.com/f256d7dcb4d1e7a1865b8eb035cf7479.png'
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />
                            <p>HTML/CSS || Node.js || JavaScript || Express.js || React || MySQL|| MongoDB || Bootstrap || Discord.js</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/talmage-lucas-779a6a1b8/" rel="noreferrer" target="_blank" >
                                    <i class="fa fa-linkedin"></i>

                                </a>

                                <a href="https://github.com/talmageluke" rel="noreferrer" target="_blank" >
                                    <i class="fa fa-github"></i>

                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
