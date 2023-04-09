# austinkurpuis.com

This repository holds all of the source code associated with [www.austinkurpuis.com](https://www.austinkurpuis.com/).

The current version hosted on [AWS Cloud Front](https://aws.amazon.com/cloudfront/) using most the new bells and whistles; such as [HTTP/2](https://aws.amazon.com/about-aws/whats-new/2016/09/amazon-cloudfront-now-supports-http2/) and [IPV6](https://aws.amazon.com/about-aws/whats-new/2016/10/ipv6-support-for-cloudfront-waf-and-s3-transfer-acceleration/). The cost is around $0.51/month.

It makes use of [Bootstrap 5](https://getbootstrap.com/) and the particles on the home page are made using [ParticleJS](https://github.com/VincentGarreau/particles.js/).

## Develop

### dev

```npm dev```

Start dev server.

### deploy

```npm deploy```

Publish to S3, and invalidate CloudFront cache.
