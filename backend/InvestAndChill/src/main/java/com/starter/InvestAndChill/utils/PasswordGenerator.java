package com.starter.InvestAndChill.utils;

import java.security.SecureRandom;

public class PasswordGenerator {

    // Tập hợp các ký tự bạn muốn sử dụng
    private static final String UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL_CHARS = "!@#$%^&*()_+[]{}|<>?";
    
    private static final String ALL_CHARS = UPPER + LOWER + DIGITS + SPECIAL_CHARS;

    private static final SecureRandom random = new SecureRandom();

    public static String generatePassword(int length) {
        if (length < 1) throw new IllegalArgumentException("Password length must be at least 1");

        StringBuilder password = new StringBuilder(length);

        // Đảm bảo rằng mật khẩu có ít nhất một ký tự từ mỗi nhóm
        password.append(UPPER.charAt(random.nextInt(UPPER.length())));
        password.append(LOWER.charAt(random.nextInt(LOWER.length())));
        password.append(DIGITS.charAt(random.nextInt(DIGITS.length())));
        password.append(SPECIAL_CHARS.charAt(random.nextInt(SPECIAL_CHARS.length())));

        // Tạo các ký tự ngẫu nhiên cho phần còn lại
        for (int i = 4; i < length; i++) {
            password.append(ALL_CHARS.charAt(random.nextInt(ALL_CHARS.length())));
        }

        // Trộn ngẫu nhiên các ký tự để không theo thứ tự cố định
        return shuffleString(password.toString());
    }

    // Hàm này sẽ trộn chuỗi ngẫu nhiên
    private static String shuffleString(String input) {
        char[] a = input.toCharArray();
        for (int i = a.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            // Hoán đổi ký tự
            char temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        return new String(a);
    }

    public static void main(String[] args) {
        // Tạo mật khẩu ngẫu nhiên với độ dài yêu cầu, ví dụ: 12 ký tự
        String password = generatePassword(12);
        System.out.println("Generated Password: " + password);
    }
}

