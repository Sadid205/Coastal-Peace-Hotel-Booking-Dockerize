# Generated by Django 5.1.1 on 2024-10-23 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0014_alter_transaction_transaction_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Success', 'Success'), ('Failed', 'Failed')], default='Success', max_length=20),
        ),
    ]
