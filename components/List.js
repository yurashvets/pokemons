import React from 'react';
import { SectionList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomList = ({
    arr,
    renderSeparator,
    navigation
}) => <SectionList
        sections={[...arr]}
        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('PokeScreen', {name: item.name, url: item.url})}>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={renderSeparator}
        stickySectionHeadersEnabled
        initialNumToRender={12}
    />



const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#a4cccb',
    },
    item: {
        height: 44,
        borderBottomWidth: 0,
        paddingTop: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
})

export default CustomList;