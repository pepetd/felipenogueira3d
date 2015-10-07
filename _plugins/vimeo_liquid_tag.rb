class LiquidVimeo < Liquid::Tag
  def initialize(tag_name, url, tokens)
    super
    @url = url.strip
  end
  
  def get_video_id(context, url)
    page_video_url = context.environments.first['page']['video_url']
    if page_video_url.nil?
      url.sub(/^(http|https):\/\/vimeo.com\//, '').to_i
    else
      page_video_url.sub(/^(http|https):\/\/vimeo.com\//, '').to_i
    end
  end
  
  def render(context)
    video_id = get_video_id(context, @url)
    <<-MARKUP.strip
      <iframe src="https://player.vimeo.com/video/#{video_id}?color=009688&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    MARKUP
  end
end

Liquid::Template.register_tag('livimeo', LiquidVimeo)