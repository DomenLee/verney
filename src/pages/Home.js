/**
 * Created by domen on 2016/12/6.
 */

import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import 'whatwg-fetch'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            homeList: []
        }
        fetch('http://127.0.0.1:3001/homeList').then((data) => {
            return data.json()
        }).then((data) => {
            let homeList = []
            data.homeList.map((card, i) => {
                homeList.push(
                    <Card key={i}>
                        <CardHeader
                            title={card.user.name}
                        />
                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                            <img src={card.user.imageUrl} />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>
                )
            })
            this.setState({
                homeList: homeList
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.homeList}
            </div>
        )
    }
}

export default Home