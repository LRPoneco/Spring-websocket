package com.example.springwebsocket.websocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * @描述 开启WebSocket支持的配置类
 * @创建人 haoqian
 * @创建时间 2021/5/20
 */
@Configuration
public class WebSocket {

	@Bean
	public ServerEndpointExporter serverEndpointExporter() {
		return new ServerEndpointExporter();
	}
}
