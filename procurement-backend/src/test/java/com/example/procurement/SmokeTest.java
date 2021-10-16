package com.example.procurement;

import com.example.procurement.Controller.OrderController;
import com.example.procurement.Controller.QuotationController;
import com.example.procurement.Controller.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
public class SmokeTest {

    @Autowired
    private UserController userController;

    @Autowired
    private OrderController orderController;

    @Autowired
    private QuotationController quotationController;

    @Test
    public void contextLoadsUser() throws Exception {
        assertThat(userController).isNotNull();
    }

    @Test
    public void contextLoadsOrder() throws Exception {
        assertThat(orderController).isNotNull();
    }

    @Test
    public void contextLoadsQuotation() throws Exception {
        assertThat(quotationController).isNotNull();
    }
}
