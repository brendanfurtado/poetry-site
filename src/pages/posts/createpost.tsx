import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// let inline = ReactQuill.Quill.import('blots/inline');
// let block = ReactQuill.Quill.import('blots/block');
// ReactQuill.Quill.import('blots/block/embed');

// class BoldBlot extends inline {}
// BoldBlot.blotName = 'bold';
// BoldBlot.tagName = 'strong';

// class ItalicBlot extends inline {}
// ItalicBlot.blotName = 'italic';
// ItalicBlot.tagName = 'em';

function CreatePost() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [authorName, setAuthorName] = useState('');

  return (
    <>
      <div>This is the post page</div>
      <div className="new-story-container">
        <div className="category-container"></div>
        <input
          placeholder="Title"
          value={title}
          className="article-title-input w-full h-20 text-black text-5xl font-semibold font-serif border-none px-12 outline-none"
          onChange={(e) => {
            console.log(e.currentTarget.value);
            setTitle(e.currentTarget.value);
          }}
        />
        <input
          placeholder="Subtitle"
          value={subtitle}
          className="article-title-input w-full h-20 text-black text-3xl font-semibold font-serif border-none px-12 outline-none"
          onChange={(e) => setSubtitle(e.currentTarget.value)}
        />
        {/* <input
          onKeyDown={this.onKeyDown}
          placeholder="Sub Title"
          value={this.state.subtitle}
          className="article-subtitle-input"
          onChange={(e) => this.setState({ subtitle: e.currentTarget.value })}
        /> */}

        {/* <ReactQuill
          modules={NewStory.modules}
          formats={NewStory.formats}
          ref={this.editor}
          theme="bubble"
          value={html}
          onChange={this.onChange}
          placeholder="Tell your story..."
        /> */}
        {/* <input
          onKeyDown={this.onKeyDown}
          placeholder="Your Name"
          className="article-cover-input"
          value={this.state.authorName}
          onChange={(e) => this.setState({ authorName: e.currentTarget.value })}
        /> */}

        {/* <Button
          variant="success"
          className="post-btn"
          onClick={(e) => this.submitButton(e)}
        >
          Post
        </Button> */}
      </div>
    </>
  );
}

export default CreatePost;
