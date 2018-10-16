import React from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

const PokemonInfo = ({
    title,
    abilities,
    stats,
    species,
    base_experience,
}) => <React.Fragment>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
        <ScrollView style={styles.tableContainer}>
            <View style={[styles.flexNarrow, styles.alignCenter, styles.section]}>
                <Text style={styles.sectionTitle}>
                    Abilities
                </Text>
                <View style={[styles.alignCenter, styles.sectionContent]}>
                    { abilities.map((item, i) => <Text key={i}>{item.ability.name}</Text>) }
                </View>
            </View>
            <View style={[styles.flexWide, styles.alignCenter, styles.section]}>
                <Text style={styles.sectionTitle}>
                    Stats
                </Text>
                <View style={[styles.alignCenter, styles.sectionContent]}>
                    { stats.map((item, i) => <View key={i} style={styles.directionRow}>
                        <Text>
                            { item.stat.name }
                        </Text>
                        <Text>
                            { ` - ${item.base_stat}` }
                        </Text>    
                    </View>) }                            
                </View>
            </View>
            <View style={[styles.flexWide, styles.alignCenter, styles.section]}>
                <Text style={styles.sectionTitle}>
                    Species
                </Text>
                <Text style={[styles.sectionContent, styles.alignTextCenter]}>
                    { species.name}
                </Text>
            </View>
            <View style={[styles.flexWide, styles.alignCenter, styles.section]}>
                <Text style={styles.sectionTitle}>
                    Base Experience
                </Text>
                <Text style={[styles.sectionContent, styles.alignTextCenter]}>
                    { base_experience }
                </Text>
            </View>
        </ScrollView>
    </React.Fragment>

export default PokemonInfo;

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 120,
        flexDirection:'row',
        justifyContent:'center'
    },
    title: {
        zIndex: 10,
        fontSize: 20,
        fontWeight:"700",
        color:'#5e5e5e',
        paddingBottom: 20,
    },
    tableContainer: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 12,
        flexDirection: 'column',
        paddingVertical: 20,
    },
    section: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontWeight: "700",
        color: '#fff',
        fontSize: 16,
        paddingVertical: 20,
        backgroundColor: '#a4cccb',
        width: '100%',
        textAlign: 'center',
    },
    sectionContent: {
        paddingVertical: 30,
        backgroundColor: '#fff',
        marginBottom: 30,
        width: '100%',
    },
    alignCenter: {
        alignItems: 'center',
    },
    flexWide: {
        flex: 1.5,
    },
    flexNarrow: {
        flex: 1.1,
    },
    directionRow: {
        flexDirection: 'row',
    },
    alignTextCenter: {
        textAlign: 'center',
    }
});
