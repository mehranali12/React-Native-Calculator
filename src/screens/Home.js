import React, { useState, useEffect, isValidElement } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import color from '../constants/color';
import { TextButton, Input, } from '../components';
import SyntacticButton from '../components/SyntacticButton';
import { GolbalStyle } from '../styles/utils/GlobalStyles';

export default Home = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isShowingText, setIsShowingText] = useState('');
    const [result, setresult] = useState();
    const [storedata, setstoredata] = useState();
    const [isinput, setisinput] = useState(true);
    const [openSyntacticCacl, setOpenSyntacticCacl] = useState(false);

    console.log('result 1 = ', result);
    console.log('isShowingText 1 = ', isShowingText);


    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (isShowingText.includes('^^') && isShowingText[isShowingText.indexOf('^') + 1]) {
            alert("Don't use double caps !");

        } else
            if (isShowingText.includes('^') && isShowingText[isShowingText.indexOf('^') + 1] != undefined) {
                let temp = '';
                for (let i = isShowingText.indexOf('^'); i < isShowingText.length; i++) {
                    console.log('kkkkkkkkkkkkkkkkkkk', isShowingText)
                    if (isShowingText.includes('^')) {
                        temp = isShowingText.replace('^', '**')
                        setresult(eval(temp))
                    }
                    console.log('result 2 = ', result);
                    setData();
                }
            }
    }, [isShowingText]);


    // useEffect(() => {
    //     let temp = '';
    //     let e = '2.718281828459';
    //     for (let i = isShowingText.indexOf('e'); i < isShowingText.length; i++) {
    //         console.log('iiiiiiiiiiiiiiiiiiiii = ', i);
    //         if (isShowingText.includes('e')) {
    //             setresult('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    //         } 
    //         // else if (isShowingText.includes('e^')) {
    //         //     temp = isShowingText.replace('^', '**')
    //         //     setresult(eval(temp))
    //         // }
    //         // else if (isShowingText.includes('e') + isShowingText['0']) {
    //         //     temp = isShowingText.substring(isShowingText.indexOf('e') + 1);
    //         //     let newvalue = eval(Math.E * temp);
    //         //     setresult(newvalue);
    //         // }

    //         console.log('result 2 = ', result);
    //         //setData();
    //     }
    // }, [isShowingText]);

    //below function about π
    useEffect(() => {
        let temp = '';
        for (let i = isShowingText.indexOf('π'); i < isShowingText.length; i++) {
            if (isShowingText.includes('π^')) {
                temp = isShowingText.replace('^', '**')
                setresult(eval(temp))
            } else if (isShowingText.includes('π') + isShowingText['0']) {
                temp = isShowingText.substring(isShowingText.indexOf('π') + 1);
                let newvalue = eval(Math.PI * temp);
                setresult(newvalue);
            }

            console.log('result 2 = ', result);
            //setData();

        }
    }, [isShowingText]);


    useEffect(() => {
        let temp = '';
        let e = '2.7182';

        for (let i = isShowingText.indexOf('ln('); i < isShowingText.length; i++) {

            if (isShowingText.includes('ln(e') || isShowingText.includes('log(e)')) {
                setresult('1.4427046851812222');
            } else if (isShowingText.includes('ln(0') || isShowingText.includes('log(0)')) {
                setresult('-Infinity')
            } else if (isShowingText.includes('ln(') && isShowingText['3']) {
                temp = Math.log2(isShowingText.substring(isShowingText.indexOf('(') + 1));
                setresult(temp)
            } else if (isShowingText.includes('ln(ln(')) {
                setresult("Involide Expression !");
            }
            console.log('result 2 = ', result);
            //setData();
        }
    }, [isShowingText]);


    useEffect(() => {
        let temp = '';
        for (let i = isShowingText.indexOf('log('); i < isShowingText.length; i++) {
            // console.log("iiiiiiiiiiiiiiiiiiii", i);
            let log = isShowingText.toString(i > isShowingText[i])

            if (isShowingText.includes('log(e') || isShowingText.includes('log(e)')) {
                setresult('0.43429738512450866');
            } else if (isShowingText.includes('log(0') || isShowingText.includes('log(0)')) {
                setresult('-Infinity')
            } else if (isShowingText.includes('log(') && isShowingText['4']) {
                temp = Math.log10(isShowingText[4]);
                temp = Math.log10(isShowingText.substring(isShowingText.indexOf('(') + 1));
                setresult(temp);
            } else if (isShowingText.includes('log(log(')) {
                setresult("Involide Expression !");
            }
            console.log('result 2 = ', result);
            //setData();
        }
    }, [isShowingText]);


    const removeElement = () => {
        setIsShowingText(isShowingText.substring(0, isShowingText.length - 1))
    };

    const deleteElement = () => {
        setIsShowingText(isShowingText.substring(0, ''))
    };

    const evaluateExpression = () => {
        let outPut = eval(isShowingText);
        setresult(outPut);
    };

    const syntacticExpression = () => {
        if (isShowingText == 'sin(0)' || isShowingText == 'sin(0') {
            setresult('0')
        } else if (isShowingText == 'sin(1)' || isShowingText == 'sin(1') {
            setresult('0.8415')
        } else if (isShowingText == 'sin(15)' || isShowingText == 'sin(15') {
            setresult('0.650')
        } else if (isShowingText == 'sin(30)' || isShowingText == 'sin(30') {
            setresult('-0.988')
        } else if (isShowingText == 'sin(45)' || isShowingText == 'sin(45') {
            setresult('0.85')
        } else if (isShowingText == 'sin(60)' || isShowingText == 'sin(60') {
            setresult('-0.30')
        } else if (isShowingText == 'sin(75)' || isShowingText == 'sin(75') {
            setresult('-0.387')
        } else if (isShowingText == 'sin(90)' || isShowingText == 'sin(90') {
            setresult('1')
        } else if (isShowingText == 'sin(120)' || isShowingText == 'sin(120') {
            setresult('0.866')
        } else if (isShowingText == 'sin(135)' || isShowingText == 'sin(1350') {
            setresult('0.7071')
        } else if (isShowingText == 'sin(150)' || isShowingText == 'sin(150') {
            setresult('0.866')
        } else if (isShowingText == 'sin(180)' || isShowingText == 'sin(180') {
            setresult('0')
        } else if (isShowingText == 'sin(210)' || isShowingText == 'sin(210') {
            setresult('0.46')
        } else if (isShowingText == 'sin(225)' || isShowingText == 'sin(225') {
            setresult('-0.7071')
        } else if (isShowingText == 'sin(240)' || isShowingText == 'sin(240') {
            setresult('-0.866')
        } else if (isShowingText == 'sin(270)' || isShowingText == 'sin(270') {
            setresult('-1')
        } else if (isShowingText == 'sin(300)' || isShowingText == 'sin(330') {
            setresult('0.866')
        } else if (isShowingText == 'sin(315)' || isShowingText == 'sin(315') {
            setresult('-0.7071')
        } else if (isShowingText == 'sin(330)' || isShowingText == 'sin(330') {
            setresult('-0.132')
        } else if (isShowingText == 'sin(360)' || isShowingText == 'sin(360') {
            setresult('0')
        } else if (isShowingText == 'cos(0)' || isShowingText == 'cos(0') {
            setresult('1')
        } else if (isShowingText == 'cos(1)' || isShowingText == 'cos(1') {
            setresult('0.99')
        } else if (isShowingText == 'cos(15)' || isShowingText == 'cos(15') {
            setresult('0.96')
        } else if (isShowingText == 'cos(30)' || isShowingText == 'cos(30') {
            setresult('0.8660')
        } else if (isShowingText == 'cos(45)' || isShowingText == 'cos(45') {
            setresult('0.7071')
        } else if (isShowingText == 'cos(60)' || isShowingText == 'cos(60') {
            setresult('0.999')
        } else if (isShowingText == 'cos(75)' || isShowingText == 'cos(75') {
            setresult('0.2588')
        } else if (isShowingText == 'cos(90)' || isShowingText == 'cos(90') {
            setresult('0')
        } else if (isShowingText == 'cos(120)' || isShowingText == 'cos(120') {
            setresult('-1/5')
        } else if (isShowingText == 'cos(135)' || isShowingText == 'cos(135') {
            setresult('-0.70')
        } else if (isShowingText == 'cos(150)' || isShowingText == 'cos(150') {
            setresult('-0.866')
        } else if (isShowingText == 'cos(180)' || isShowingText == 'cos(180') {
            setresult('-1')
        } else if (isShowingText == 'cos(210)' || isShowingText == 'cos(210') {
            setresult('-1/2')
        } else if (isShowingText == 'cos(225)' || isShowingText == 'cos(225') {
            setresult('-0.70')
        } else if (isShowingText == 'cos(240)' || isShowingText == 'cos(240') {
            setresult('-0.5')
        } else if (isShowingText == 'cos(270)' || isShowingText == 'cos(270') {
            setresult('0')
        } else if (isShowingText == 'cos(300)' || isShowingText == 'cos(300') {
            setresult('1/5')
        } else if (isShowingText == 'cos(315)' || isShowingText == 'cos(315') {
            setresult('0.707')
        } else if (isShowingText == 'cos(330)' || isShowingText == 'cos(330') {
            setresult('0.86')
        } else if (isShowingText == 'cos(360)' || isShowingText == 'cos(360') {
            setresult('1')
        } else if (isShowingText == 'tan(0)' || isShowingText == 'tan(0') {
            setresult('0')
        } else if (isShowingText == 'tan(1)' || isShowingText == 'tan(1') {
            setresult('0.017')
        } else if (isShowingText == 'tan(15)' || isShowingText == 'tan(15') {
            setresult('0.267')
        } else if (isShowingText == 'tan(30)' || isShowingText == 'tan(30') {
            setresult('0.577')
        } else if (isShowingText == 'tan(45)' || isShowingText == 'tan(45') {
            setresult('1')
        } else if (isShowingText == 'tan(60)' || isShowingText == 'tan(60') {
            setresult('1.723')
        } else if (isShowingText == 'tan(75)' || isShowingText == 'tan(75') {
            setresult('3.732')
        } else if (isShowingText == 'tan(90)' || isShowingText == 'tan(90') {
            setresult('infinity or undefined')
        } else if (isShowingText == 'tan(120)' || isShowingText == 'tan(120') {
            setresult('-1.732')
        } else if (isShowingText == 'tan(135)' || isShowingText == 'tan(135') {
            setresult('-1')
        } else if (isShowingText == 'tan(150)' || isShowingText == 'tan(150') {
            setresult('-0.577')
        } else if (isShowingText == 'tan(180)' || isShowingText == 'tan(180') {
            setresult('0')
        } else if (isShowingText == 'tan(210)' || isShowingText == 'tan(210') {
            setresult('0.577')
        } else if (isShowingText == 'tan(225)' || isShowingText == 'tan(225') {
            setresult('1')
        } else if (isShowingText == 'tan(240)' || isShowingText == 'tan(240') {
            setresult('1.732')
        } else if (isShowingText == 'tan(270)' || isShowingText == 'tan(270') {
            setresult('undefined')
        } else if (isShowingText == 'tan(300)' || isShowingText == 'tan(300') {
            setresult('-1.732')
        } else if (isShowingText == 'tan(315)' || isShowingText == 'tan(315') {
            setresult('-1')
        } else if (isShowingText == 'tan(330)' || isShowingText == 'tan(330') {
            setresult('-0.577')
        } else if (isShowingText == 'tan(360)' || isShowingText == 'tan(360') {
            setresult('0')
        } else if (isShowingText == 'sin()' || isShowingText == 'cos()' || isShowingText == 'tan()') {
            alert("Please put the value !")
        } else {
            alert("You can put the value only in specfic degree ! eg: 0,1,15,30,45,...")
        }
    };

    const factorial = () => {
        let num = isShowingText;
        try {
            if (num.includes('!!')) {
                alert("You have involid input !")
            } else if (num) {
                var a = (num.slice(0, -1));
                console.log("a result = ", a);
                let fact = 1;
                for (i = a; i >= 1; i--) {
                    fact *= i;
                    console.log("fact result i = ", fact);
                }
                setresult(fact);
            }
        } catch (error) {
            console.log("you have an error in ", error);
        }
    };

    //invalid expression

    // const exponantional = () => {
    //     console.log(" yes you call me here ! thanks.........")
    //     let e = isShowingText;
    //     if(e.includes('e')){
    //         setresult('2.718281828459')
    //     }
    //     try {

    //     } catch (error) {
    //         console.log("you have an error in ", error);
    //     }
    // };

    const setData = async () => {
        let oldArray = [];
        let data = await AsyncStorage.getItem('storage')
        if (data) {
            oldArray = JSON.parse(data);
            oldArray.push(eval(isShowingText) + '=' + isShowingText);
        } else {
            oldArray.push(eval(isShowingText) + '=' + isShowingText);
        }
        setstoredata(oldArray);
        var jsonStrofArray = JSON.stringify(oldArray);
        await AsyncStorage.setItem('storage', jsonStrofArray);
    };

    const getData = async () => {
        let data = await AsyncStorage.getItem('storage')
        setstoredata(JSON.parse(data));
    };

    const clearHistry = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
        } catch (e) {
            console.log('error...');
        }
        console.log('Histry Clear Done....!');
    };

    const showHistory = ({ item }) => {
        return (
            <View style={GolbalStyle.showHistory}>
                <Text style={{ color: color.white }}>{item}</Text>
            </View>
        );
    };

    return (
        <View style={GolbalStyle.container}>

            <Modal
                // animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={GolbalStyle.modal}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View style={GolbalStyle.modalCloseButton}>
                            <Text style={{ fontSize: wp('8%'), color: color.white, textAlign: 'center', paddingBottom: 10, }}>x</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <FlatList
                            data={storedata}
                            renderItem={showHistory}
                            keyExtractor={(item, index) => index}
                            initialNumToRender={6}
                        />
                    </View>

                    <View style={GolbalStyle.clearHistryButton}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!modalVisible);
                            clearHistry();
                        }}>
                            <Text style={{ color: color.white }}>CLEAR HISTORY</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

            <View style={[GolbalStyle.inputarea, {
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: '5%',
                height: hp('22%'),
                // height: openSyntacticCacl ? hp('20%') : hp('30%'),
                // paddingTop: openSyntacticCacl ? hp('10%') : 0,
            }
            ]}>
                <Input
                    placeholder='0'
                    style={[styles.input, {}]}
                    value={isShowingText}
                    onChange={(text) => { text }}
                    clearButtonMode='always'
                    multiline={true}
                />
                <View style={[GolbalStyle.result, { marginRight: '1%', padding: '2%' }]}>
                    <Text style={{ fontSize: hp('4%'), color: color.white }}>{result}</Text>
                </View>
            </View>

            <View style={[GolbalStyle.progress, {
                flexDirection: 'row',
                height: hp('10%'),
            }]}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => {
                        getData();
                        setModalVisible(true);
                    }}>
                    <Text style={{ fontSize: hp('2%'), color: color.white, }}>HISTORY</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={{
                        // borderWidth: 1,
                        // borderColor: color.white,
                        borderRadius: 5,
                        height: hp('6%'),
                        width: wp('25%'),
                        alignItems: 'center',
                        marginRight: wp('5%'),
                        justifyContent: 'center',
                    }}
                    onPress={() => {
                        setOpenSyntacticCacl(true);
                    }}>
                    <Text style={{ fontSize: hp('3%'), color: color.white, }}>{openSyntacticCacl ? 'close' : 'show'}</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    onPress={() => removeElement()}
                >
                    <Text style={GolbalStyle.removeElement}>x</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newModal}>
                {/* <Modal
                    //animationType='slide'
                    transparent={true}
                    visible={openSyntacticCacl}
                > */}
                <View style={[styles.syntactic,
                {
                    width: wp('100%'),
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }]}>

                    <View style={{ flexDirection: 'row', }}>
                        <SyntacticButton
                            name="π"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + 'π')
                                else
                                    setIsShowingText(isShowingText + 'π');
                            }}
                        />
                        <SyntacticButton
                            name="^"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + '^')
                                else
                                    setIsShowingText(isShowingText + '^');
                            }}
                        />
                        <SyntacticButton
                            name="!"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + '!')
                                else
                                    setIsShowingText(isShowingText + '!');
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <SyntacticButton
                            name="sin"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + 'sin')
                                else
                                    setIsShowingText('sin(' + isShowingText);
                            }}
                        />
                        <SyntacticButton
                            name="cos"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + 'cos')
                                else
                                    setIsShowingText('cos(' + isShowingText);
                            }}
                        />
                        <SyntacticButton
                            name="tan"
                            onPress={() => {
                                if (result)
                                    setIsShowingText(result.toString() + 'tan')
                                else
                                    setIsShowingText('tan(' + isShowingText);
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <SyntacticButton
                            name="e"
                            onPress={() => {
                                // if (result)
                                //     setIsShowingText(result.toString() + 'e')
                                // else
                                setIsShowingText(isShowingText + 'e');
                            }}
                        />
                        <SyntacticButton
                            name="ln"
                            onPress={() => {
                                setIsShowingText('ln(' + isShowingText)
                            }}
                        />
                        <SyntacticButton
                            name="log"
                            onPress={() => {
                                setIsShowingText('log(' + isShowingText)
                            }}
                        />
                    </View>
                </View>
                {/* </Modal> */}
            </View>


            <View style={[GolbalStyle.keysContainer, {
                // marginTop: openSyntacticCacl ? hp('40%') : hp('2%'),
                // height: openSyntacticCacl ? hp('5') : hp('60%'),
                // padding: openSyntacticCacl ? wp('2%') : wp('3%'),
                // borderWidth: 1, borderColor: 'white',
            }]}>

                <View style={{ flexDirection: 'row', }}>
                    <TextButton
                        style={[styles.color, {}]}
                        name="AC"
                        onPress={() => {
                            deleteElement();
                            setresult('');
                            setisinput(true);
                        }}
                    />
                    <TextButton
                        style={[styles.color, {}]}
                        name="( )"
                        onPress={() => {
                            // deleteElement();
                            // setresult('');
                            // setisinput(true);
                            setIsShowingText(isShowingText + ")")
                        }}
                    />
                    <TextButton
                        style={styles.color}
                        name="%"
                        onPress={() => {
                            if (result)
                                setIsShowingText(result.toString() + '%')
                            else
                                setIsShowingText(isShowingText + "%")
                        }}
                    />
                    <TextButton
                        style={styles.color}
                        name="/"
                        onPress={() => {
                            if (result)
                                setIsShowingText(result.toString() + '/')
                            else
                                setIsShowingText(isShowingText + "/")
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <TextButton
                        name="7"
                        onPress={() => {
                            setIsShowingText(isShowingText + '7')
                        }}
                    />
                    <TextButton
                        name="8"
                        onPress={() => {
                            setIsShowingText(isShowingText + '8')
                        }}
                    />
                    <TextButton
                        name="9"
                        onPress={() => {
                            setIsShowingText(isShowingText + '9')
                        }}
                    />
                    <TextButton
                        style={styles.color}
                        name="x"
                        onPress={() => {
                            if (result)
                                setIsShowingText(result.toString() + '*')
                            else
                                setIsShowingText(isShowingText + "*")
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <TextButton
                        name="4"
                        onPress={() => setIsShowingText(isShowingText + "4")}
                    />
                    <TextButton
                        name="5"
                        onPress={() => setIsShowingText(isShowingText + "5")}
                    />
                    <TextButton
                        name="6"
                        onPress={() => setIsShowingText(isShowingText + "6")}
                    />
                    <TextButton
                        style={styles.color}
                        name="-"
                        onPress={() => {
                            if (result)
                                setIsShowingText(result.toString() + '-')
                            else
                                setIsShowingText(isShowingText + "-")
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <TextButton
                        name="1"
                        onPress={() => setIsShowingText(isShowingText + "1")}
                    />
                    <TextButton
                        name="2"
                        onPress={() => setIsShowingText(isShowingText + "2")}
                    />
                    <TextButton
                        name="3"
                        onPress={() => setIsShowingText(isShowingText + "3")}
                    />
                    <TextButton
                        style={styles.color}
                        name="+"
                        onPress={() => {
                            if (result)
                                setIsShowingText(result.toString() + '+')
                            else
                                setIsShowingText(isShowingText + "+")
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', }}>
                    <TextButton
                        name="00"
                        onPress={() => setIsShowingText(isShowingText + "00")}
                    />
                    <TextButton
                        name="0"
                        onPress={() => setIsShowingText(isShowingText + "0")}
                    />
                    <TextButton
                        name="."
                        onPress={() => setIsShowingText(isShowingText + ".")}
                    />
                    <TextButton
                        style={styles.color}
                        name="="
                        onPress={() => {
                            if (isShowingText.includes('+') || isShowingText.includes('-') || isShowingText.includes('*') || isShowingText.includes('/') || isShowingText.includes('%')) {
                                if (!isShowingText) {
                                    console.log("you have an empty expression !")
                                } else {
                                    evaluateExpression();
                                }
                            } else if (isShowingText.includes('sin') || isShowingText.includes('cos') || isShowingText.includes('tan')) {
                                syntacticExpression();
                            } else if (isShowingText.includes('!')) {
                                factorial();
                            } 
                            // else if (isShowingText.includes('e')) {
                            //     //exponantional();
                            //     console.log("call me i u need......")
                            // }
                            //below function called to store data in local storage
                            setData();
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#005DB2',
        color: color.white,
    },
    input: {
        fontSize: hp('4%'),
        color: color.white,
    },
    syntactic: {
        width: wp('100%'),
        height: hp('20%'),
        // marginTop: hp('2%'),
        borderRadius: 10,
    },
});