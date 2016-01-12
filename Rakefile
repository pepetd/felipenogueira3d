require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"

GITHUB_REPONAME = "pepetd/pepetd.github.io"

desc "Generate site files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "config" => ["_config.prod.yml", "_config.yml"],
    "source" => ".",
    "destination" => "_site"
  })).process
end

desc "Generate and publish site to GitHub Pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end
