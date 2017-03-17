# austinkurpuis.com

This repository holds all of the source code associated with [www.austinkurpuis.com](https://www.austinkurpuis.com/).

In addition to being my personal web site it also serves as testing ground for new and open source technologies.

Here are the primary requirements I had for creating this site:

- HTTP/2 support
- ipv6 support
- supper fast response
- light as a feather 
- force HTTPS
- statically hosted
- served from CDN
- Written in Pug
- inlined CSS and JS
- jQuery free
- cost effective

The current version hosted on [AWS Cloud Front](https://aws.amazon.com/cloudfront/) using most the new bells and whistles; such as [HTTP/2](https://aws.amazon.com/about-aws/whats-new/2016/09/amazon-cloudfront-now-supports-http2/) and [IPV6](https://aws.amazon.com/about-aws/whats-new/2016/10/ipv6-support-for-cloudfront-waf-and-s3-transfer-acceleration/). The cost is around $0.51/month.

The template itself is written in [Pug](https://pugjs.org/api/getting-started.html) then pre-compiled with a build process. It makes use of [Bootstrap 4.0.0-alpha.6](https://v4-alpha.getbootstrap.com/), although the previous version was built on [Spectre](https://picturepan2.github.io/spectre/). The particles in the hero panel are made by [ParticleJS](https://github.com/VincentGarreau/particles.js/).

## Gulp
The build process is setup using Gulp currently, however I have been experimenting with my own build tools and am considering migrating.

### dev (default)
```gulp dev```

Run build then launch browsersync server and setup file watchers for development.

### build
```gulp build```

Compile scss files to single file and minify, concat and minify js files, [inline images files](https://github.com/imaustink/gulp-inline-images), compile pug files.

### publish
```gulp publish```

Run build, publish to S3, and invalidate CloudFront cache.