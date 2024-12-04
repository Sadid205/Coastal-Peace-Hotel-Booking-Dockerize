# Generated by Django 5.1.1 on 2024-10-04 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0007_alter_transaction_transaction_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_status',
            field=models.CharField(choices=[('Success', 'Success'), ('Pending', 'Pending'), ('Failed', 'Failed')], default='Success', max_length=20),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_types',
            field=models.CharField(choices=[('Booking', 'Booking'), ('Withdraw', 'Withdraw'), ('Deposit', 'Deposit')], default='Deposit', max_length=20),
        ),
    ]
