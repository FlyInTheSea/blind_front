import React from "react"
import Dropzone from 'react-dropzone'
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};


const renderUploadFile = ({
                              input,
                              ...rest,

                          }) => {
    return (


        <div>

            <RaisedButton
                label={"上传"}
                fullWidth={true}
                // onChange={(event, value) => input.onChange(value)}
            >
                <input
                    style={styles.exampleImageInput}
                />

            </RaisedButton>
        </div>
    )
}


export default renderUploadFile
// if (input.files && input.files[0]) {
//     let reader = new FileReader();
//
//     reader.onload = function (e) {
//         $('#blah').attr('src', e.target.result);
//     }
//
//     reader.readAsDataURL(input.files[0]);
// }
// }
{/*<Dropzone*/
}
{/*ref="dropzone"*/
}
{/*// onDrop={(upload) => dispatch(change('FileUploadExampleForm', 'file', upload[0]))}*/
}
{/*multiple={false}*/
}
{/*accept='image/*'>*/
}
{/*<div>Click here select files to upload.</div>*/
}
{/*</Dropzone>*/
}