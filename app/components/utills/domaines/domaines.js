import React, { Component } from 'react'
import Image from 'next/image'
import style from './domaines.module.scss'

export default class Domaines extends Component {
    render() {
        return (
            <div className={style.global} style={this.props.style}>
                <div></div>
                <Image className={style.Image} src={this.props.src} width={600} height={600} alt="image"/>
                <div className={style.textZone}>
                    <div>{this.props.title1}</div>
                    <div className={style.text}>{this.props.title2}</div>
                </div>
            </div>
        )
    }
}
