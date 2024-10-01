package com.starter.InvestAndChill.jwt.security.services;

import com.dropbox.core.DbxException;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.FileMetadata;
import com.dropbox.core.v2.files.UploadErrorException;
import com.dropbox.core.v2.sharing.SharedLinkMetadata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

@Service
public class DropboxService {

    @Autowired
    private DbxClientV2 dropboxClient;

    public String uploadFile(MultipartFile file) throws IOException, UploadErrorException, DbxException {
        try (InputStream in = file.getInputStream()) {
            // Upload file lên Dropbox
            FileMetadata metadata = dropboxClient.files().uploadBuilder("/" + file.getOriginalFilename())
                    .uploadAndFinish(in);

            // Tạo đường dẫn chia sẻ cho file vừa upload
            SharedLinkMetadata sharedLink = dropboxClient.sharing()
                    .createSharedLinkWithSettings(metadata.getPathLower());

            // Chuyển đổi đường dẫn chia sẻ thành đường dẫn trực tiếp tới file
            String sharedUrl = sharedLink.getUrl();
            String directUrl = sharedUrl.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");

            // Trả về đường dẫn trực tiếp của file
            return directUrl;
        }
    }
    
    public byte[] downloadFile(String path) throws IOException, DbxException {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            FileMetadata metadata = dropboxClient.files().downloadBuilder(path).download(out);
            return out.toByteArray();
        }
    }
}
