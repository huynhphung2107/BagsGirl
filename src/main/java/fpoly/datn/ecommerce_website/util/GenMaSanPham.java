package fpoly.datn.ecommerce_website.util;

import java.util.Random;

public class GenMaSanPham {
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_OF_CHARACTERS = 2;
    private static final int NUMBER_OF_DIGITS = 7;

    public static String generateMaTuDong() {
        StringBuilder sb = new StringBuilder();
        // Tạo ngẫu nhiên chữ cái đầu
        Random random = new Random();
//        for (int i = 0; i < NUMBER_OF_CHARACTERS; i++) {
//            char character = CHARACTERS.charAt(random.nextInt(CHARACTERS.length()));
//            sb.append(character);
//        }

        //them dau +
        sb.append("SP");
        sb.append("_");
        // Tạo ngẫu nhiên các số
        for (int i = 0; i < NUMBER_OF_DIGITS; i++) {
            int digit = random.nextInt(10);
            sb.append(digit);
        }
        return sb.toString();
    }
}