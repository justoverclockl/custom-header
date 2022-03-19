/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import LogInModal from 'flarum/forum/components/LogInModal';

app.initializers.add('justoverclock/custom-header', () => {
    extend(IndexPage.prototype, 'oncreate', function (){
      const headerImage = document.getElementById('StreamsHero-content')
      const bgImageUrl = app.forum.attribute('justoverclock-custom-header.headerBackgroundImage') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
      headerImage.style.backgroundImage = "url('" +  bgImageUrl  + "')";
      headerImage.setAttribute('background-size', 'cover')
    })
    extend(IndexPage.prototype, 'view', function (vdom) {
        if (vdom.children && vdom.children.splice) {
            const user = app.session.user;
            const bg = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
            const LinkButtonOne = app.forum.attribute('LinkButtonOne');
            const LinkButtonTwo = app.forum.attribute('LinkButtonTwo');

            // definiamo il tasto di iscrizione
            const HeaderButtons = {
                view: function (vnode) {
                    if (!user)
                        return m(
                            'a',
                            {
                                className: 'Button StreamsSignUp js-signup',
                                onclick: () => app.modal.show(SignUpModal),
                                'data-component': 'hero',
                                'data-element': 'buttons',
                            },
                            app.translator.trans('custom-header.forum.signup')
                        );
                },
            };
            // definiamo il tasto login
            const LoginButton = {
                view: function (vnode) {
                    if (!user)
                        return m(
                            'a',
                            {
                                className: 'Button StreamsLogin js-login',
                                onclick: () => app.modal.show(LogInModal),
                            },
                            app.translator.trans('custom-header.forum.login')
                        );
                },
            };
            // inizio icone social
            const twitterIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('twitterIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-twitter' });
                    }
                },
            };
            const facebookIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('facebookIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-facebook-square' });
                    }
                },
            };
            const youtubeIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('youtubeIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-youtube' });
                    }
                },
            };
            const gitHubIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('githubIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-github-square' });
                    }
                },
            };
            //codice per l'header
            const insert = m(
                'div',
                { className: 'StreamsHero-image' },
                m('div', { className: 'StreamsHero-content', id: 'StreamsHero-content' }, [
                    m('div', { className: 'StreamsHero-buttonContainer' }, [
                        m('a', { className: 'js-nav', 'data-element': 'logo', target: '_blank' }, [
                            m('a',
                                { href: app.forum.attribute('twitterIcon'),
                                  title: app.translator.trans('custom-header.forum.twitter') },
                                m(twitterIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('facebookIcon'),
                                    title: app.translator.trans('custom-header.forum.facebook'),
                                },
                                m(facebookIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('youtubeIcon'),
                                    title: app.translator.trans('custom-header.forum.youtube'),
                                },
                                m(youtubeIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('githubIcon'),
                                    title: app.translator.trans('custom-header.forum.github'),
                                },
                                m(gitHubIcon)
                            ),
                        ]),
                        m(HeaderButtons),
                        m(LoginButton),
                    ]),
                    m('h2', { className: 'StreamsHero-header' }, app.forum.attribute('headerTitle')),
                    m('p', { className: 'StreamsHero-blurb' }, app.forum.attribute('headerTagline')),
                    m('a',
                        { href: LinkButtonOne, className: 'headerButtons' },
                        m('span', { className: 'buttontext' }),
                        app.forum.attribute('buttonText') || 'Button 1'
                    ),
                    m('a',
                        { href: LinkButtonTwo, className: 'headerButtons' },
                        m('span', { className: 'buttontext' }),
                        app.forum.attribute('button2Text') || 'Button 2'
                    ),
                ])
            );
            vdom.children.splice(0, 0, insert);
        }
    });
});
extend(IndexPage.prototype, 'oncreate', function (vnode) {
    const welcomeHero = document.getElementsByClassName('Hero WelcomeHero');
    // nascondiamo la welcome hero nella pagina principale
    if (app.current.matches(IndexPage)) {
        for (var i = 0; i < welcomeHero.length; i++) {
            welcomeHero[i].style.display = 'none';
        }
    }
});
