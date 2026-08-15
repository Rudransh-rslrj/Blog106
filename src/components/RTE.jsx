import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({name, control,label, defaultValue= ""}) {
  return (
    <div className='w-full overflow-hidden'>
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
             value={defaultValue}
             init={{
                    initialValue: defaultValue,
                    height: 420,
                    min_height: 260,
                    menubar: false,
                    resize: true,
                    toolbar_mode: 'wrap',
                    mobile: {
                        toolbar_mode: 'floating',
                    },
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
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
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                    "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | removeformat | code fullscreen",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height:1.6; } img { max-width: 100%; height: auto; }",
                    browser_spellcheck: true,
                    paste_data_images: true,
                    branding: false,
                }}
                onEditorChange={onChange}
                tinymceScriptSrc="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js"
                    />
        )}
        />

                
        
      
    </div>
  )
}

export default RTE