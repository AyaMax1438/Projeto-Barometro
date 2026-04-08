//Antes de fazer tudo, instalar o pacote "expo-sensor" digitando "npm expo install expo-sensors", onde vai ter a API "Barometer" para usarmos
import { Barometer } from "expo-sensors";
import { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//Plataform