import React, {useState} from 'react'
import {Text, View, Button, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
function Perfil() {
    
    const [image, setImage]= useState('https://via.placeholder.com/200');

    const selectImage = ()=>{
        
        const options={
            title: 'Selecciona una imagen',
            storageOptions:{
                skipBackup: true,
                path: 'images',
            }
        }
        launchImageLibrary(options,response =>{
            if (response.errorCode) {
                console.log(response.errorMessage);
            }
            else if (response.didCancel) {
                console.log('El usuario cancelo la seleccion');
            }
            else{
                const path = response.assets[0].uri
                setImage(path)
            }
        });
    }


return (
<View  style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:"#ffffff"}}>
<Text style={{
    
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 5,
    }}>Perfil</Text>

<Image
    style={{
        alignSelf:'center',
        height: 90,
        width: 90,
        borderRadius: 100,
        marginBotton: 50,
    }}


    source={{uri: image}}

/>

<Button 
    title="Seleccionar imagen"
    onPress= {selectImage} 
/>
<text>Nombre</text>
<text>Jesus Bryan Gonzalez Delgado</text>
<text>Grado y grupo</text>
<text>10-A</text>
<text>Link a git hub</text>
<text></text>

</View>
)
}
export default Perfil;