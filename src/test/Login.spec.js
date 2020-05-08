
import React from 'react'
import { shallow } from 'enzyme'
import {LoginForTest} from "../companents/LoginForTest";


describe('DialogLogin', () => { // групируем с помощью describe все тесты для контейнера News
    const mockLogin = jest.fn()

    const props = { // создаем свойства
        show: true,
        onHide: mockLogin,
        onLogin: mockLogin
    }

    const initialState = {
        email: '',
        password: '',
    }



    describe('DialogLogin initial', () => {
        const login = shallow(<LoginForTest {...props} />)

        it('renders properly', () => {
            expect(login).toMatchSnapshot()
        })

        describe('Form handlers', ()=>{
            describe('when typing into email inpt', ()=>{
                const email = 'vas@gmail.com'
                const password = '4TYE46E8RT'
                const wrongPassword = '11'
                const wrongEmail = 'vascom'

                it('should set the email value on change with trim',  () => {
                    // console.log(login.debug())
                    login.find('input[type="email"]').simulate('change', {
                        target: {
                            value: email
                        }
                    })
                    expect(login.find('input[type="email"]').prop('value')).toEqual(email)
                });


            })
        })


    })
})