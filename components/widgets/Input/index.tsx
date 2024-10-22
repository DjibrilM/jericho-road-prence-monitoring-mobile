import React, { forwardRef, Ref, useState } from 'react'
import { Input, InputProps } from '@rneui/themed';
import { StyleSheet, TextStyle, StyleProp } from 'react-native';

interface Props extends InputProps {
    customInputStyle?: StyleProp<TextStyle>
}

const index: React.FC<Props> = forwardRef(({ customInputStyle, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
        <Input
            {...props}
            ref={ref}
            containerStyle={{ borderColor: "transparent" }}
            inputStyle={[styles.input, { borderColor: focused ? "#475569" : "#94a3b8" }, customInputStyle as typeof props.inputStyle]}
            inputContainerStyle={{ borderColor: "transparent" }}

            onFocus={(e) => {
                setFocused(true);
                props.onFocus?.(e)
            }}

            onBlur={(e) => {
                setFocused(false);
                props.onBlur?.(e)
            }}

        />
    )
})


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        height: 50,
        fontSize: 14,
    },
})

export default index


