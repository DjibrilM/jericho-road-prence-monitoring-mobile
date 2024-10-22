import React, { useMemo } from 'react'
import { Button, ButtonProps } from '@rneui/base'
import { StyleProp, StyleSheet, TextStyle } from 'react-native'

interface Props extends ButtonProps {
    variant?: 'primary' | "danger" | "success",
    customInputStyle?: StyleProp<TextStyle>
}

const index = ({ variant = 'primary', customInputStyle, ...props }: Props) => {

    const createdVariant = useMemo(() => {
        switch (variant) {
            case 'primary':
                return StyleSheet.create({
                    button: {
                        backgroundColor: '#334155'
                    },
                    title: {
                        color: '#fff'
                    }
                })
                break;
            case 'danger':
                return StyleSheet.create({
                    button: {
                        backgroundColor: '#dc2626',
                    },

                    title: {
                        color: '#fff'
                    }
                })
            case "success":
                return StyleSheet.create({
                    button: {
                        backgroundColor: '#0d9488'
                    },
                    title: {
                        color: '#fff'
                    }
                })
            default:
            case 'primary':
                return StyleSheet.create({
                    button: {
                        backgroundColor: '#334155'
                    },
                    title: {
                        color: '#fff'
                    }
                })
        }
    }, [])

    return (
        <Button {...props} buttonStyle={[createdVariant.button, { borderRadius: 6, height: 50 }, customInputStyle]} titleStyle={createdVariant?.title} />
    )
}



export default index