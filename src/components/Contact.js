import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Talmage Lucas</h2>
                        <img
                            src="https://i.gyazo.com/f256d7dcb4d1e7a1865b8eb035cf7479.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hello, I am full stack web developer looking for work. BLah blah blah blah blah</p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px' }}>
                                        <i className="fa fa-phone-square" />
                                        (910)-986-4703</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px' }}>
                                        <i className="fa fa-envelope" />
                                       TalmageLucas@gmail.com </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
