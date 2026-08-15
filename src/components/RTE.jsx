import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({name, control,label, defaultValue= ""}) {
  return (
    <div className='w-full'>
        {label&&<label className='inline-block mb-1 pl-1'>
                {label}
        </label>}
        <Controller 
        name={name}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
             initialValue={defaultValue}
             apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                init={{
                    initialValue: defaultValue,
                    height: 300,
                    min_height: 220,
                    menubar: true,
                    toolbar_mode: 'wrap',
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height:1.6; } img { max-width: 100%; height: auto; }",
                    mobile: {
                        toolbar: 'undo redo | bold italic | bullist numlist | link image | fullscreen',
                        toolbar_mode: 'floating'
                    }
                }}
                onEditorChange={onChange}
                    />
        )}
        />

                
        
      
    </div>
  )
}

export default RTE