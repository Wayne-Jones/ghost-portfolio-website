FROM ghost:5.61.2-alpine as cloudinary
RUN apk add g++ make python3
RUN su-exec node yarn add https://github.com/tkisme/ghost-storage-cloudinary/

FROM ghost:5-alpine
COPY --chown=node:node --from=cloudinary $GHOST_INSTALL/node_modules $GHOST_INSTALL/node_modules
COPY --chown=node:node --from=cloudinary $GHOST_INSTALL/node_modules/ghost-storage-cloudinary $GHOST_INSTALL/content/adapters/storage/ghost-storage-cloudinary
# Here, we use the Ghost CLI to set some pre-defined values.
RUN apk update; \
    apk add nano; \
    set -ex; \
    su-exec node ghost config imageOptimization.resize false; \
    su-exec node ghost config storage.active ghost-storage-cloudinary; \
    su-exec node ghost config storage.ghost-storage-cloudinary.upload.use_filename true; \
    su-exec node ghost config storage.ghost-storage-cloudinary.upload.unique_filename false; \
    su-exec node ghost config storage.ghost-storage-cloudinary.upload.overwrite false; \
    su-exec node ghost config storage.ghost-storage-cloudinary.upload.folder my-blog; \
    su-exec node ghost config storage.ghost-storage-cloudinary.fetch.quality auto; \
    su-exec node ghost config storage.ghost-storage-cloudinary.fetch.cdn_subdomain true;
VOLUME ["/var/lib/ghost/content"]