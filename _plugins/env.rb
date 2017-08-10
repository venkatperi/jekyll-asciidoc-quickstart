module Jekyll

  class EnvironmentVariablesGenerator < Generator
    priority :highest

    def generate(site)
      site.config['TRAVIS_BUILD_NUMBER'] = ENV['TRAVIS_NUMBER']  || 'n/a'
      site.config['BUILD_TIME'] = Time.now()
      Jekyll.logger.info site.config.to_yaml
    end
  end

end
