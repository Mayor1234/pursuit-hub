import { defineField, defineType } from 'sanity';

import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Preview = (props: any) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url) as string;
  return (
    <div>
      {renderDefault({ ...props, title: 'YouTube Embed' })}

      <LiteYouTubeEmbed id={id} title="Youtube video" />
    </div>
  );
};
export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: Preview,
  },
});
