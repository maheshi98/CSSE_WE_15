package com.example.procurement;

import com.example.procurement.Controller.UserController;
import com.example.procurement.Entity.OrderEntity;
import com.example.procurement.Entity.QuotationEntity;
import com.example.procurement.Entity.UserEntity;
import com.example.procurement.Repository.UserRepository;
import com.example.procurement.Service.OrderService;
import com.example.procurement.Service.QuotationService;
import com.example.procurement.Service.UserService;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import static org.assertj.core.api.Assertions.assertThat;


import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import org.springframework.test.context.junit4.SpringRunner;



import java.util.List;



import static org.hamcrest.Matchers.greaterThanOrEqualTo;

import static org.hamcrest.MatcherAssert.assertThat;

import static org.hamcrest.Matchers.*;



import java.util.List;
import java.util.Optional;

@SpringBootTest
@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
class ProcurementApplicationTests {

	@Autowired
	private OrderService orderService;
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private QuotationService quotationService;



	@Test
	public void whenUserIdIsProvided_thenRetrievedNameIsCorrect() {
		Mockito.when(orderService.getOrderName()).thenReturn("Orde100");
		String testName = orderService.getOrderName();
		Assert.assertEquals("Orde100", testName);
	}

	@BeforeEach
	void initUseCase() {
		userService = new UserService(userRepository);
	}



	@Test
	void savedUserHasRegistrationDate() {
		UserEntity user = new UserEntity("zaphod", "zaphod@mail.com" ,"123", "siteManager");
		UserEntity savedUser = userService.saveUser(user);
		assertThat(!savedUser.getEmail().isEmpty());
	}

	@Test
	public void testGetAllOrders() {
		List<OrderEntity> order = orderService.getAllOrders();
		assertThat(order.size(), is(greaterThanOrEqualTo(1)));
	}

	@Test
	public void testGetAllApprovedOrder() {
		List<OrderEntity> order = orderService.getOrderByStatus("APPROVED");
		assertThat(order.size(), is(greaterThanOrEqualTo(1)));
	}

	@Test
	public void testGetAllQuotations() {
		List<QuotationEntity> quotationEntities = quotationService.getAllQuotation();
		assertThat(quotationEntities.size(), is(greaterThanOrEqualTo(1)));
	}

	@Test
	public void testGetOrderById() {
		Optional<OrderEntity> orderEntity = orderService.getById("");
		assertThat(orderEntity.isPresent());
	}


	@Test
	void contextLoads() {
	}

}
