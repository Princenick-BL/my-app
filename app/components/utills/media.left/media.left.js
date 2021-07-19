import Link from 'next/link'
import Image from 'next/image'
import React, { Component } from 'react'
import style from './media.left.module.scss'

export default class MediaLeft extends Component {
    render() {
        return (
            <div className={style.global}>
                <p>Prince Nick BALLO</p>
                <Link href="/">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/github.png" alt="github"/>
                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <div className={style.media }>
                            <Image width={25} height={25} src="/icons/linked.png" alt="linkedIn"/>
                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/mail.png" alt="gmail"/>
                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <div className={style.media}>
                            <Image width={25} height={25} src="/icons/tel.png" alt="phone"/>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
}
