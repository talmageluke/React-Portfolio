import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src='https://i.gyazo.com/f256d7dcb4d1e7a1865b8eb035cf7479.png'
                                alt="avatar"
                                className="avatar-img"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}> Talmage Lucas</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Web Developer</h4>
                        <hr style={{ borderTop: '3px solid', width: "50%" }}></hr>
                        <p>My name is John Talmage Lucas and I am a fledgeling web developer eager to learn.
                        While still new to the field the amount of time and effor I have put into it is massive.
                        I have very much enjoyed learning Node.js and it's libraries relevant to Web Development.
                            I have even started to branch out to other small non-web related projects in Node.js. </p>
                    </Cell>



                    <Cell className="resume-right" col={8}>
                        <h2>Education</h2>

                        <Education startYear={2014}
                            endYear={2019}
                            schoolName={"Auburn University"}
                            schoolDescription={"Marketing"}

                        ></Education>
                        <Education startYear={2020}
                            endYear={2020}
                            schoolName={"University Of Utah Full-Stack Bootcamp"}
                            schoolDescription={"This is where I first began my web development journey. While only a 6 month course I am now proficient in Node, React, MySQL, MongoDB, Express, APIs"}

                        ></Education>
                        <hr style={{ borderTop: '3px solid' }}></hr>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={"Now"}
                            jobName="Rental Lead at Park City"
                            jobDescription="Feeling trapped by marketing and not totally sure what I wanted to do with my life, I threw everything I owned in my car and drove to Salt Lake City. I had decided I might as well do something I enjoy while trying to find my calling. The rental shop was a fast paced and stressful but fun enviroment. Given a leadership position I helped train new employees on how to set skis and snowboards as well as helping upset customers and opening up the shop. You have to take a very different leadership approach when managing ski bums."
                        >

                        </Experience>
                        <hr style={{ borderTop: '3px solid' }}></hr>

                        <h2>Skills</h2>
                        <Grid>
                            <div className="skills">

                                <ul>

                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>React</li>
                                    <li>Jquery</li>
                                    <li>Bootstrap</li>
                                    <li>Adobe Premiere Pro</li>
                                    <li>Adobe Photoshop</li>
                                </ul>


                            </div>
                        </Grid>
                    </Cell>

                </Grid>

            </div >
        )
    }
}
